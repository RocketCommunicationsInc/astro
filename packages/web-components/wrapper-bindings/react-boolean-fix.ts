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

const runReactBooleanFix = async (outputTarget: ReactOutputTarget) => {
    console.log('made it to runReactBooleanFix - line 23')
    const attatchPropsFilePath = path.resolve(
        __dirname,
        outputTarget.attatchPropsFile
    )

    let needToReplace = await fs.promises.readFile(attatchPropsFilePath, {
        encoding: 'utf-8',
    })
    needToReplace = needToReplace.replace(
        /if \(propType === 'string'\) \{\n          node.setAttribute\(camelToDashCase\(name\), newProps\[name\]\);\n        \}/gm,
        'if (propType === "boolean") {\n\t\t\t\tif (newProps[name] === true) {\n\t\t\t\tnode.setAttribute(camelToDashCase(name), camelToDashCase(name));\n} else {\n\tnode.removeAttribute(camelToDashCase(name));\n\t}\n} else if (propType === "string") {\n\tnode.setAttribute(camelToDashCase(name), newProps[name]);\n}'
    )
    /*
    if (propType === "boolean") {
        if (newProps[name] === true) {
            node.setAttribute(camelToDashCase(name), camelToDashCase(name));
          } else {
            node.removeAttribute(camelToDashCase(name));
          }
        } else if (propType === "string") {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
    }

    */

    await fs.promises.writeFile(attatchPropsFilePath, needToReplace)
    // let data = []
    // let typed = Array.from(path.join(__dirname, './attatch-props-correct.txt'))
    // console.log(typeof typed, 'is it FUCKING typed?')
    // await fs.promises
    //     .readFile(
    //         path.join(__dirname, './attatch-props-correct.txt').toString(),
    //         'utf-8'
    //     )
    //     .then((line) => data.push(line))
    // console.log(data, 'DATA')

    // console.log('Going to write to attatch props - line 34')
    // await fs.promises.writeFile(attatchPropsFilePath, data.toString())
}

interface ReactOutputTarget {
    attatchPropsFile: string
}

export const reactBooleanFix = (
    outputTarget: ReactOutputTarget
): OutputTargetCustom => ({
    type: 'custom',
    name: 'react-boolean-fix',
    generator: async (
        _config: Config,
        compilerCtx: CompilerCtx,
        buildCtx: BuildCtx
    ) => {
        const timespan = buildCtx.createTimeSpan(
            'generate react boolean utils fix started',
            true
        )

        await new Promise((resolve) => {
            compilerCtx.events.on('buildLog', (log) => {
                console.log('line 62, before if')
                if (
                    log.messages.findIndex((elm) =>
                        elm.includes('generate react-library finished')
                    ) !== -1
                ) {
                    console.log('line 68 - before resolve()')
                    resolve()
                }
            })
        })

        compilerCtx.events.on('buildLog', (log) => {
            console.log('line 74')
            if (
                log.messages.findIndex((elm) =>
                    elm.includes('build finished, watching for changes...')
                ) !== -1
            ) {
                console.log('if passed - line 80')
                runReactBooleanFix(outputTarget)
            }
        })

        await runReactBooleanFix(outputTarget)

        timespan.finish('generate react-boolean-fix finished')
    },
})
