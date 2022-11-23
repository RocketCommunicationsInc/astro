export function * getChangelogText(release) {
	yield `# ${release.properName}\n\n`
	yield `## ${release.newVersion}\n\n`

	for (const change of release.changes) {
		yield `### ${change.properType} Changes\n\n`

		for (let cause of change.causes) {
			yield `#### ${cause.properName}\n\n`

			for (let summary of cause.summary) {
				yield `- ${summary}\n`
			}

			yield `\n`
		}

		yield `\n`
	}
}
