const postcss = require('postcss')

//* Return the given string without "var" or parentheses
function trimString(s) {
    if (s.startsWith('var(') && s.endsWith(')')) {
        return s.slice(4, -1)
    } else return s
}

/**
 *
 * @param {*} value a string containing the value to check for multiple vars
 * @param {*} vars the object containing all CSS Custom Props and their values
 *
 * @returns each var(--*) with fallback included, concatenated back into a single string
 */
function parseMultiple(value, vars) {
    // matches var( at least 2 times anywhere in the stirng
    const reg = /var\((?=.*var\()/gm
    let withFallbacks = []
    if (value.search(reg) === -1) {
        return
    } else {
        const splitBySpace = value.split(' ')
        splitBySpace.forEach((val) => {
            let trimmed = trimString(val)
            const valueWithFallback = `val(${trimmed}, ${vars[trimmed]})`
            withFallbacks.push(valueWithFallback)
        })
        // console.log(withFallbacks.join(' '))
        //convert back into a string. Ie, var(--spacing-0, 0rem) var(--spacing-1, 0.25rem)
        return withFallbacks.join(' ')
    }
}

module.exports = postcss.plugin('add-fallbacks', (options) => {
    //Store all CSS Custom prop declarations. This obj looks like:
    /*
  {
    '--opacity-disabled': '40%',
    '--color-background-base-default': '#101923',
    '--color-background-base-header': '#172635',
    '--color-background-base-hover': '#142435',
  } ...ect
  */
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
                decl.value = decl.value.replace(
                    property,
                    `var(${propertyName}, ${value})`
                )
            })
        })
    }
})

/**
 * indeterminate progerss, anything w/ internal props
 * Need things that use multiple props to work, ie: margin: var(--spacing-2) var(--spacing-3)
 *
 */
