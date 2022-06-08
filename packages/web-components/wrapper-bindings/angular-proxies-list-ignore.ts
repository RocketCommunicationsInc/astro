import {
    BuildCtx,
    CompilerCtx,
    Config,
    OutputTargetCustom,
} from '@stencil/core/internal'
import fs from 'fs'
import path from 'path'

const addIgnore = async (outputTarget: AngularOutputTarget) => {
    const proxiesListPath = path.resolve(
        __dirname,
        outputTarget.proxiesListFile
    )

    let str = '//@ts-nocheck\n'
    let file = await fs.promises.readFile(proxiesListPath, {
        encoding: 'utf-8',
    })

    const full = str + file
    setTimeout(() => {
        fs.promises.writeFile(proxiesListPath, full)
    }, 1000)
}

interface AngularOutputTarget {
    proxiesListFile: string
}

export const angularProxiesListIgnore = (
    outputTarget: AngularOutputTarget
): OutputTargetCustom => ({
    type: 'custom',
    name: 'angular-ignore-proxies-list',
    generator: async (
        _config: Config,
        compilerCtx: CompilerCtx,
        buildCtx: BuildCtx
    ) => {
        const timespan = buildCtx.createTimeSpan(
            'generate angular ignore proxies list started',
            true
        )

        await new Promise<void>((resolve) => {
            compilerCtx.events.on('buildLog', (log) => {
                if (
                    log.messages.findIndex((elm) =>
                        elm.includes('generate react-boolean-fix finished')
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
                addIgnore(outputTarget)
            }
        })

        await addIgnore(outputTarget)

        timespan.finish('generate angular-proxies-list-ignore finished')
    },
})
