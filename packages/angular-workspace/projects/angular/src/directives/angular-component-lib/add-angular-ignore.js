const fs = require('fs')

const addIgnore = () => {
    const proxiesListPath =
        '../angular-workspace/projects/angular/src/directives/proxies-list.ts'
    fs.readFile(proxiesListPath, 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        if (!data.startsWith('// @ts-nocheck')) {
            let str = `// @ts-nocheck\n`
            const newData = str + data
            fs.writeFile(proxiesListPath, newData, 'utf8', (err) => {
                if (err) throw err
            })
        }
    })
}

const addAccessors = () => {
    const proxiesListPath = '../angular-workspace/projects/angular/src/directives/proxies.ts'
    const angularValueAccessorBindings = [
        {
            elementSelectors: ['rux-input', 'rux-textarea', 'rux-slider'],
            event: 'ruxinput',
            targetAttr: 'value',
            type: 'text',
        },
        {
            elementSelectors: ['rux-checkbox', 'rux-switch'],
            event: 'ruxchange',
            targetAttr: 'checked',
            type: 'boolean',
        },
        {
            elementSelectors: ['rux-radio-group', 'rux-select'],
            event: 'ruxchange',
            targetAttr: 'value',
            type: 'text',
        },
    ]

    fs.readFile(proxiesListPath, 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        let lines = data.split(/\r?\n/)
        //Add import for valueAccessors
        //check for import statements for valueAccessors and add them if they don't exist
        if (!lines.some(line => line.includes(`import { BooleanValueAccessor }`))) {
            lines.splice(0, 0, `import { BooleanValueAccessor } from './boolean-value-accessor';`)
            lines.splice(0, 0, `import { TextValueAccessor } from './text-value-accessor';`)
            for (const [index, line] of lines.entries()) {
                for (const accessor of angularValueAccessorBindings) {
                    const elementSelectors = accessor.elementSelectors
                    for (const selector of elementSelectors) {
                        // console.log(selector, line)
                        if (line.includes(`selector: '${selector}'`)) {
                            console.log(line)
                            //Capitalize first letter of accessor type for import
                            //Add valueAccessor to component import if it doesn't exist
                            lines.splice(index + 1, 0, `  imports: [${accessor.type.charAt(0).toUpperCase() + accessor.type.slice(1)}ValueAccessor],`)
                            const hostDirectiveStr = `hostDirectives: [${accessor.type.charAt(0).toUpperCase() + accessor.type.slice(1)}ValueAccessor],`
                            lines.splice(index + 1, 0, `  ${hostDirectiveStr}`)
                        }
                    }
                }
            }
            const newData = lines.join('\n')
            fs.writeFile(proxiesListPath, newData, 'utf8', (err) => {
                if (err) throw err
            })
        }
    })
}

addIgnore()
addAccessors()