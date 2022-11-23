import type { Package as GotPackage } from '@manypkg/get-packages'
import type { Release as ChangesetRelease } from '@changesets/types'

export { inc } from 'semver'

// -----------------------------------------------------------------------------

export function getCurrentWorkingDirectory(): string

// -----------------------------------------------------------------------------

export class Releases extends Map<string, Release> {
	constructor(pkgs: Packages)

	get(name: string, type?: string): Release

	add(name: string, change: { name: string, type: VersionType, summary: string }): this

	public(): Release[]

	changes: Release[]
}

export class Release {
	name: string
	type: string
	oldVersion: string
	newVersion: string
	changes: Changes
	package: Package
	packages: Packages

	get properName(): string
}

export class Changes extends Map<PackageName, Change> {
	[Symbol.iterator](): IterableIterator<Change>
}

export class Change {
	type: VersionType
	causes: Causes

	get properType(): ProperVersionType
}

export class Causes extends Map<PackageName, Cause> {
	[Symbol.iterator](): IterableIterator<Cause>
}

export class Cause {
	name: string
	type: VersionType
	summary: Set<string>

	get properName(): string
}

export interface Change {
	name: string
	type: VersionType
	summary: string
}

export type PackageName = string
export type VersionType = string
export type ProperVersionType = string

// -----------------------------------------------------------------------------

export class Changesets extends Array<Changeset> {
	constructor(cwd: string)

	static getHigherVersionType(versionA: string, versionB: string): string

	static sortByVersionType(versionA: string, versionB: string): number

	base: string
}

export interface Changeset {
	id: string
	summary: string
	releases: ChangesetRelease[]
}

export function getChangesetTemplate(base: string): Promise<{
	getChangelogText(release: Release): IterableIterator<string>
}>

// -----------------------------------------------------------------------------

export type PackageJSON = {
	[K in keyof GotPackage['packageJson']]: GotPackage['packageJson'][K]

	displayName: string
	dependents: string[]
}

export type Package = {
	name: string
	dir: string
	deps: string[]
	json: PackageJSON
	ast: object
	changes: {
		version?: string
		dependencies?: {
			[packageName: string]: string
		}
		devDependencies?: {
			[packageName: string]: string
		}
		peerDependencies?: {
			[packageName: string]: string
		}
	}
}

export class Packages extends Array<Package> {
	constructor(cwd: string)

	getPackageByPackageName(name: string): Package | null

	base: string
}

export function getBumpedPackageData(dirname: string, newVersion: string): { packageJson: string, packageLock: string }

// -----------------------------------------------------------------------------

export function readFileSyncWithFallback(pathname: string, fallback: string): string
