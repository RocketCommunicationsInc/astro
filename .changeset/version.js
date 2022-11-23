// @ts-check
import { Changesets, Packages, Releases, getBumpedPackageData, getChangesetTemplate, getCurrentWorkingDirectory, parseJSON, readFileSyncWithFallback } from './api.js'
import * as ps from 'path'
import * as fs from 'fs'

const cwd = getCurrentWorkingDirectory()
const pkgs = new Packages(cwd)
const changesets = new Changesets(cwd)
const releases = new Releases(pkgs)

const changesetTemplate = await getChangesetTemplate(cwd)

const isDryRun = false

class Actions extends Array {
	call() {
		for (let call of this) {
			call()
		}
	}
}

const createVersioningActions = (
	/** @type {Changesets} */ changesets
) => {
	const actions = new Actions()

	for (let changeset of changesets) {
		const summary = changeset.summary
		const changesetPath = ps.join(changesets.base, changeset.id + '.md')

		actions.push(() => {
			if (!isDryRun) {
				fs.rmSync(changesetPath, { force: true, recursive: true })
			}
		})

		for (let { name, type } of changeset.releases) {
			const change = { name, type, summary }

			releases.add(name, change)
		}
	}

	for (const release of releases.public()) {
		// update the release changelog

		const changelogPath = ps.join(release.package.dir, 'CHANGELOG.md')

		const oldChangelog = readFileSyncWithFallback(changelogPath, '')
		const newChangelog = [ ...changesetTemplate.getChangelogText(release) ].join('')

		const mergedChangelogs = getMergedChangelogs(oldChangelog, newChangelog)

		actions.push(() => {
			if (!isDryRun) {
				fs.writeFileSync(changelogPath, mergedChangelogs)
			}
		})

		// update the release package

		release.package.changes.version = release.newVersion

		// update any packages using the release as a dependency

		for (let pkg of release.packages) {
			if (pkg.json.dependencies && release.name in pkg.json.dependencies) {
				pkg.changes.dependencies = pkg.changes.dependencies || {}
				pkg.changes.dependencies[release.name] = release.newVersion
			}

			if (pkg.json.devDependencies && release.name in pkg.json.devDependencies) {
				pkg.changes.devDependencies = pkg.changes.devDependencies || {}
				pkg.changes.devDependencies[release.name] = release.newVersion
			}

			if (pkg.json.peerDependencies && release.name in pkg.json.peerDependencies) {
				pkg.changes.peerDependencies = pkg.changes.peerDependencies || {}
				pkg.changes.peerDependencies[release.name] = release.newVersion
			}
		}
	}

	const getMember = (/** @type {any[]} */ members, /** @type {string} */ name) => members.find(
		(/** @type {object} */ member) => member.name?.value === name
	)

	const getOffsets = (/** @type {any} */ member) => /** @type {number[]} */ ([
		member?.value.loc.start.offset,
		member?.value.loc.end.offset,
	])

	const getValueWithInsertion = (/** @type {string} */ source, /** @type {any} */ insertion, offsetLead = 0, offsetTail = 0) => `${
		source.slice(0, offsetLead)
	}${
		JSON.stringify(
			preserveSemverRangeCharacter(source, offsetLead, offsetTail) + insertion
		)
	}${
		source.slice(offsetTail)
	}`

	/** Return the range character that preceeds the version number, otherwise an empty string. */
	const preserveSemverRangeCharacter = (
		/** @type {string} */ source,
		/** @type {number} */ offsetLead,
		/** @type {number} */ offsetTail
	) => {
		/** Version number for the Package JSON. */
		const version = source.slice(offsetLead + 1, offsetTail - 1)

		/** Range character that preceeds the version number. */
		const preserve = (
			version[0] === '^' || version[0] === '~'
				? version[0]
			: ''
		)

		return preserve
	}

	for (let pkg of pkgs) {
		const { version, dependencies, devDependencies, peerDependencies } = pkg.changes

		if (version || dependencies || devDependencies || peerDependencies) {
			let packageJsonData = fs.readFileSync(ps.join(pkg.dir, 'package.json'), 'utf-8')
			let packageLockData = fs.existsSync(ps.join(pkg.dir, 'package-lock.json')) ? fs.readFileSync(ps.join(pkg.dir, 'package-lock.json'), 'utf-8') : ''

			if (version) {
				const packageJAST = parseJSON(packageJsonData, {})

				const versionAST = getMember(packageJAST.body?.members, 'version')

				if (versionAST) {
					const [ offsetLead, offsetTail ] = getOffsets(versionAST)

					packageJsonData = getValueWithInsertion(packageJsonData, version, offsetLead, offsetTail)
				}
			}

			if (dependencies) {
				for (let name in dependencies) {
					const packageJAST = parseJSON(packageJsonData, {})

					const depsAST = getMember(packageJAST.body?.members, 'dependencies')
					const depAST = depsAST?.value?.members && getMember(depsAST?.value?.members, name)
					
					if (depAST) {
						const [ offsetLead, offsetTail ] = getOffsets(depAST)

						packageJsonData = getValueWithInsertion(packageJsonData, dependencies[name], offsetLead, offsetTail)
					}
				}
			}

			if (devDependencies) {
				for (let name in devDependencies) {
					const packageJAST = parseJSON(packageJsonData, {})

					const depsAST = getMember(packageJAST.body?.members, 'devDependencies')
					const depAST = depsAST?.value?.members && getMember(depsAST?.value?.members, name)
					
					if (depAST) {
						const [ offsetLead, offsetTail ] = getOffsets(depAST)

						packageJsonData = getValueWithInsertion(packageJsonData, devDependencies[name], offsetLead, offsetTail)
					}
				}
			}

			if (peerDependencies) {
				for (let name in peerDependencies) {
					const packageJAST = parseJSON(packageJsonData, {})

					const depsAST = getMember(packageJAST.body?.members, 'peerDependencies')
					const depAST = depsAST?.value?.members && getMember(depsAST?.value?.members, name)
					
					if (depAST) {
						const [ offsetLead, offsetTail ] = getOffsets(depAST)

						packageJsonData = getValueWithInsertion(packageJsonData, peerDependencies[name], offsetLead, offsetTail)
					}
				}
			}

			actions.push(() => {
				if (!isDryRun) {
					if (packageJsonData) {
						fs.writeFileSync(ps.join(pkg.dir, 'package.json'), packageJsonData)
					}

					if (packageLockData) {
						fs.writeFileSync(ps.join(pkg.dir, 'package-lock.json'), packageLockData)
					}
				}
			})
		}
	}

	return actions
}

const getMergedChangelogs = (
	/** @type {string} */
	oldChangelog,
	/** @type {string} */
	newChangelog
) => {
	/** Changelog Two split by line. */
	let oldChangelogLines = oldChangelog.trim().split('\n')

	/** Changelog One split by line. */
	let newChangelogLines = newChangelog.trim().split('\n')

	// calculate the line at which the changelogs diff

	/** Line at which the changelogs differ. */
	let splitByLine = 0

	while (oldChangelogLines[splitByLine] === newChangelogLines[splitByLine]) {
		++splitByLine
	}

	/** Whether an empty line should be added after the new timeline additions. */
	const shouldAddSplit = Boolean(splitByLine) && Boolean(newChangelogLines[splitByLine]) && Boolean(oldChangelogLines[splitByLine])

	/** Conditional empty line between the changelogs. */
	const changelogSplit = shouldAddSplit ? [''] : []

	/** Merged changelogs, with the newer changes added above the older changes. */
	const mergedChangelog = [
		...newChangelogLines,
		...changelogSplit,
		...oldChangelogLines.slice(splitByLine),
	].join('\n') + '\n'

	return mergedChangelog
}

const actions = createVersioningActions(changesets)

actions.call()
