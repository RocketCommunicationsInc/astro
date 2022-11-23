// @ts-check

import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import parseExports from '@changesets/parse'
import { getPackagesSync } from '@manypkg/get-packages'
import * as momoaExports from '@humanwhocodes/momoa'
import { getDependentsGraph } from '@changesets/get-dependents-graph'
import { inc } from 'semver'

export { cwd as getCurrentWorkingDirectory } from 'process'

export const { parse: parseJSON } = /** @type {typeof momoaExports} */ (momoaExports['default'])

/** @type {typeof parseExports} */
const parseChangesetFile = parseExports['default']

// -----------------------------------------------------------------------------

/** Collection of packages from the given monorepo directory. */
export class Packages extends /** @type {{ new (): Array<Package>}} */ (Array) {
	constructor(
		/** @type {string} */
		base
	) {
		super()

		/** @type {string} */
		this.base = base

		/** A collection of package data from the given monorepo directory. */
		const allpkgs = getPackagesSync(base)

		/** A map of dependencies detected from the package data. */
		const depsmap = getDependentsGraph(allpkgs)

		// add formatted entries for each package in the monorepo
		for (const { dir, packageJson } of allpkgs.packages) {
			this.push(
				createPackageEntry(dir, packageJson, depsmap)
			)
		}
	}

	/** Returns a package entry by the given name, otherwise null. */
	getPackageByPackageName(/** @type {string} */ name) {
		const pkgs = this
		const pkg = pkgs.find(pkg => pkg.json.name === name)

		return pkg || null
	}
}

/** Creates a package entry from the given package directory, package json, and dependency map. */
const createPackageEntry = (
	/** @type {string} */ pkgdir,
	/** @type {PackageJSON} */ pkgjson,
	/** @type {DependentsMap} */ depsmap
) => {
	/** Package display name. */
	const name = typeof pkgjson['displayName'] === 'string' ? pkgjson['displayName'] : pkgjson.name

	/** Package directory */
	const dir = pkgdir

	/** Package dependents (other packages affected by changes to this packages). */
	const deps = getDependents(pkgjson, depsmap)

	/** Package JSON (parsed object) */
	const json = pkgjson

	/** Package JSON (ast object) */
	const ast = parseJSON(readFileSyncWithFallback(join(pkgdir, 'package.json'), '{}'), {})

	/** @type {Package} */
	const pkg = { name, dir, deps, json, ast, changes: {} }

	return pkg
}

/** Returns an array of dependents for the given package json and given map of dependencies. */
const getDependents = (
	/** @type {PackageJSON} */ json,
	/** @type {DependentsMap} */ depsmap
) => {
	/** @type {string[]} */
	const pkgDependents = json['dependents'] || []

	/** @type {string[]} */
	const depDependents = depsmap.get(json.name) || []

	const setDependents = new Set([
		...pkgDependents,
		...depDependents,
	])

	/** @type {string[]} */
	const deps = [ ...setDependents ]

	return deps
}

// -----------------------------------------------------------------------------

/** Collection of changesets from the given monorepo directory. */
export class Changesets extends /** @type {{ new (): Array<Changeset>}} */ (Array) {
	constructor(
		/** @type {string} */
		base
	) {
		super()

		/** @type {string} */

		this.base = join(base, '.changeset')

		const changesetBaseFiles = readdirSync(this.base)

		const changesetFiles = changesetBaseFiles.filter(isChangesetFile)

		// add formatted changesets for each changeset in the given directory
		for (const changesetFile of changesetFiles) {
			this.push(
				createChangesetEntry(this.base, changesetFile)
			)
		}
	}

	static getHigherVersionType(
		/** @type {VersionType} */ versionA,
		/** @type {VersionType} */ versionB
	) {
		const version = (
			versionA === versionB || sortByVersionType(versionA, versionB) <= 0
				? versionA
			: versionB
		)

		return version
	}
}

export const isChangesetFile = (/** @type {string} */ file) => (
	!file.startsWith('.') &&
	file.endsWith('.md') &&
	file !== 'README.md'
)

export const createChangesetEntry = (
	/** @type {string} */
	base,
	/** @type {string} */
	file
) => {
	const changesetId = file.slice(0, -3)
	const changesetText = readFileSync(join(base, file), 'utf-8')
	const changesetJson = parseChangesetFile(changesetText)

	/** @type {Changeset} */
	const changeset = {
		...changesetJson,
		id: changesetId,
	}

	return changeset
}

export const getChangesetTemplate = (/** @type {string} */ base) => {
	const templatePath = join(base, '.changeset', 'template.js')
	const templateData = readFileSyncWithFallback(templatePath, 'export {}')
	const templateDURI = `data:text/javascript;charset=UTF-8,${encodeURIComponent(templateData)}`

	return import(templateDURI)
}

const versions = [ 'major', 'minor', 'patch' ]

// -----------------------------------------------------------------------------

export class Releases extends /** @type {{ new (): Map<string, Release>}} */ (Map) {
	constructor(/** @type {Packages} */ pkgs) {
		super()

		/** @type {Packages} */
		this.packages = pkgs
	}

	add(
		/** @type {string} */
		packageName,
		/** @type {{ name: PackageName, type: VersionType, summary: string }} */
		cause
	) {
		const pkg = this.packages.getPackageByPackageName(packageName)

		if (!pkg) return this

		const { name, type, summary } = cause

		let release = super.get(packageName)

		// conditionally create a release using available package details
		if (!release) {
			release = new Release(this.packages, packageName, type)

			super.set(packageName, release)
		}

		if (!release) return this

		// conditionally add the cause type (major, minor, patch), package, and summary
		release.changes.add(type, name, summary)

		// conditionally bump the release type (major, minor, patch)
		release.type = Changesets.getHigherVersionType(release.type, type)

		// conditionally bump the release version
		release.newVersion = incrementVersion(release.oldVersion, release.type)

		for (let dep of pkg.deps) {
			this.add(dep, cause)
		}

		return this
	}

	public() {
		return [ ...this.values() ].filter(
			(release) => !release.package.json.private
		)
	}

	get changes() {
		return [ ...this.values() ].filter(
			(release) => !release.package.json.private
		)
	}
}

export class Release {
	constructor(
		/** @type {Packages} */
		packages,
		/** @type {PackageName} */
		packageName,
		/** @type {VersionType} */
		type
	) {
		/** @type {Packages} */
		this.packages = packages

		/** @type {VersionType} */
		this.type = type

		/** @type {Package} */
		this.package = /** @type {any} */ (
			this.packages.getPackageByPackageName(
				packageName
			)
		)

		/** @type {string} */
		this.oldVersion = this.package.json.version

		/** @type {string} */
		this.newVersion = this.package.json.version

		/** @type {Changes} */
		this.changes = new Changes(this.packages)
	}

	get name() {
		return this.package.json.name
	}

	get properName() {
		return this.package.name
	}
}

export class Changes extends /** @type {ChangesType} */ /** @type {any} */ (Map) {
	constructor(
		/** @type {Packages} */
		packages
	) {
		super()

		/** @type {Packages} */
		this.packages = packages
	}

	get(
		/** @type {VersionType} */
		type
	) {
		/** @type {Change} */
		const change = getMap(this, type, () => new Change(this.packages, type))

		return change
	}

	add(
		/** @type {VersionType} */
		type,
		/** @type {PackageName} */
		name = '',
		/** @type {string} */
		summary = ''
	) {
		let change = this.get(type)

		if (name) {
			let cause = change.causes.get(name)

			if (summary) {
				cause.summary.add(summary)
			}
		}

		return this
	}

	map() {
		return Object.keys(this).sort(
			sortByVersionType
		).map(
			(type) => super.get(type)
		)
	}

	*[Symbol.iterator]() {
		for (const type of versions) {
			if (super.has(type)) {
				yield super.get(type)
			}
		}
	}
}

export class Change {
	constructor(
		/** @type {Packages} */
		packages,
		/** @type {VersionType} */
		type
	) {
		/** @type {Packages} */
		this.packages = packages

		/** @type {VersionType} */
		this.type = type

		/** @type {Causes} */
		this.causes = new Causes(this.packages)
	}

	get properType() {
		return toProperCase(this.type)
	}
}

export class Causes extends /** @type {CausesType} */ /** @type {any} */ (Map) {
	constructor(
		/** @type {Packages} */
		packages
	) {
		super()

		/** @type {Packages} */
		this.packages = packages
	}

	get(
		/** @type {PackageName} */
		packageName
	) {
		/** @type {Cause} */
		const cause = getMap(this, packageName, () => {
			const pkg = /** @type {Package} */ /** @type {any} */ (this.packages.getPackageByPackageName(
				packageName
			))
			const cause = new Cause(pkg)

			return cause
		})

		return cause
	}

	map(
		/** @type {{ (value: Cause, index: number, array: typeof this): any }} */
		callbackfn,
		thisArg = this
	) {
		return Object.values(this).map(callbackfn, thisArg)
	}

	*[Symbol.iterator]() {
		for (const cause of this.values()) {
			yield cause
		}
	}
}

export class Cause {
	constructor(
		/** @type {Package} */
		pkg
	) {
		/** @type {Package} */
		this.pkg = pkg

		/** @type {Set<string>} */
		this.summary = new Set()
	}

	get name() {
		return this.pkg.json.name
	}

	get properName() {
		return this.pkg.name
	}
}

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

/** Returns the given semver version bumped by the given type. */
export const incrementVersion = (
	/** @type {string} */ oldVersion,
	/** @type {string} */ type
) => (
	inc(oldVersion, /** @type {any} */ (type)) ||
	oldVersion
)

/** Sorts versions from higher to lower impact. */
const sortByVersionType = (
	/** @type {VersionType} */ versionA,
	/** @type {VersionType} */ versionB
) => versions.indexOf(versionA) - versions.indexOf(versionB)

/** @type {{ <K extends string, R extends unknown>(target: any, key: K, create: () => R): R }} */
const getMap = (
	/** @type {Map} */
	target,
	/** @type {string} */
	key,
	/** @type {any} */
	fallback = () => {}
) => {
	{
		const existingChange = Map.prototype.get.call(target, key)

		if (existingChange) return existingChange

		const producedChange = fallback(key)

		Map.prototype.set.call(target, key, producedChange)

		return producedChange
	}
}

export const toProperCase = (/** @type {string} */ string) =>
	string.replace(
		/([^\s:\-])([^\s:\-]*)/g,
		(_, $1, $2) => $1.toUpperCase() + $2.toLowerCase()
	)

export const readFileSyncWithFallback = (
	/** @type {string} */
	pathname,
	/** @type {string} */
	fallback
) => {
	try {
		return readFileSync(pathname, 'utf-8')
	} catch {
		return fallback
	}
}

export const getBumpedPackageData = (
	/** @type {string} */ dirname,
	/** @type {string} */ newVersion
) => {
	const packageJsonPath = join(dirname, 'package.json')
	const packageLockPath = join(dirname, 'package-lock.json')

	const packageJsonData = getIndividuallyBumpedPackageData(packageJsonPath)
	const packageLockData = getIndividuallyBumpedPackageData(packageLockPath)

	return {
		packageJson: packageJsonData,
		packageLock: packageLockData,
	}

	function getIndividuallyBumpedPackageData(
		/** @type {string} */ oldPackagePath
	) {
		const oldPackageData = readFileSyncWithFallback(oldPackagePath, '')

		if (!oldPackageData) return oldPackageData

		const packageJast = parseJSON(oldPackageData, {})

		const version = packageJast.body?.members.find(
			(/** @type {object} */ member) => member.name.value === 'version'
		)

		const offsetLead = version?.value.loc.start.offset
		const offsetTail = version?.value.loc.end.offset

		const newPackageData = `${
			oldPackageData.slice(0, offsetLead)
		}${
			JSON.stringify(newVersion)
		}${
			oldPackageData.slice(offsetTail)
		}`

		return newPackageData
	}
}

// -----------------------------------------------------------------------------

/** @typedef {import('@changesets/types').Config} Config */
/** @typedef {import('@changesets/types').NewChangeset} NewChangeset */
/** @typedef {import('@changesets/types').Release} ChangesetRelease */
/** @typedef {import('./api').Causes} CausesType */
/** @typedef {import('./api').Changes} ChangesType */
/** @typedef {import('./api').Changeset} Changeset */
/** @typedef {import('./api').Package} Package */
/** @typedef {import('./api').PackageJSON} PackageJSON */
/** @typedef {import('./api').PackageName} PackageName */
/** @typedef {import('./api').VersionType} VersionType */
/** @typedef {Map<string, string[]>} DependentsMap */
