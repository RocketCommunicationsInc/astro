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

addIgnore()
