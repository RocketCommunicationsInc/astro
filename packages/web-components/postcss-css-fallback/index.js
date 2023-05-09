const postcss = require('postcss')

module.exports = postcss.plugin('add-fallbacks', (options) => {
    const index = options.index || {}
    return (root) => {
        root.walkDecls((decl) => {
            const customProperties =
                decl.value.match(/var\((--[\w-]+)(, [^)]+)?\)/g) || []
            customProperties.forEach((property) => {
                const [propertyName, fallbackValue] = property
                    .replace(/var\(|\)/g, '')
                    .split(', ')
                const value =
                    fallbackValue || index[propertyName.replace('--', '')] || ''
                if (value) {
                    decl.value = decl.value.replace(
                        property,
                        `var(${propertyName}, ${value})`
                    )
                }
            })
        })
    }
})
