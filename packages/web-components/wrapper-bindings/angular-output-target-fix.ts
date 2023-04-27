/**
 * angular-output-target-fix.ts
 * Angular output target currently has a bug where events fire twice.
 * https://github.com/ionic-team/stencil-ds-output-targets/issues/81
 * Until this issue is resolved, we need to manually apply this hotfix.
 * Once this is resolved, we can safely remove this.
 * @author @razvangeangu
 */

import {
    BuildCtx,
    CompilerCtx,
    Config,
    OutputTargetCustom,
} from '@stencil/core/internal'
import fs from 'fs'
import path from 'path'

const runAngularOutputTargetFix = async (
    outputTarget: IAngularOutputTarget
) => {
    const directivesUtilsPath = path.resolve(
        __dirname,
        outputTarget.directivesUtilsFile
    )

    let directivesUtilsString = await fs.promises.readFile(
        directivesUtilsPath,
        { encoding: 'utf-8' }
    )
    directivesUtilsString = directivesUtilsString.replace(
        "import { fromEvent } from 'rxjs';",
        "import { EventEmitter } from '@angular/core';"
    )
    directivesUtilsString = directivesUtilsString.replace(
        'instance[eventName] = fromEvent(el, eventName)',
        'instance[eventName] = new EventEmitter()'
    )

    await fs.promises.writeFile(directivesUtilsPath, directivesUtilsString)
}

interface IAngularOutputTarget {
    directivesUtilsFile: string
}

export const angularOutputTargetFix = (
    outputTarget: IAngularOutputTarget
): OutputTargetCustom => ({
    type: 'custom',
    name: 'angular-library-fix',
    generator: async (
        _config: Config,
        compilerCtx: CompilerCtx,
        buildCtx: BuildCtx
    ) => {
        const timespan = buildCtx.createTimeSpan(
            'generate angular proxy utils fix started',
            true
        )

        await new Promise((resolve) => {
            compilerCtx.events.on('buildLog', (log) => {
                if (
                    log.messages.findIndex((elm) =>
                        elm.includes('generate angular-library finished')
                    ) !== -1
                ) {
                    resolve()
                }
            })
        })

        compilerCtx.events.on('buildLog', (log) => {
            if (
                log.messages.findIndex((elm) =>
                    elm.includes('build finished, watching for changes...')
                ) !== -1
            ) {
                runAngularOutputTargetFix(outputTarget)
            }
        })

        await runAngularOutputTargetFix(outputTarget)

        timespan.finish('generate angular proxy utils fix finished')
    },
})
