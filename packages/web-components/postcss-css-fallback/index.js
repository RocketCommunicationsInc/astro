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
    const customProps = {}
    return (root) => {
        root.walkDecls((decl) => {
            if (decl.variable) {
                if (!decl.value.includes('var(--')) {
                    //if value does not have var(--), then it's a custom prop declaration, store it
                    customProps[decl.prop] = decl.value
                }
            }

            //trim decl.value so that it can get correct key in customProps
            //If it's a custom prop, add the fallback value
            let trimmedValue = trimString(decl.value)
            if (customProps[trimmedValue]) {
                // console.log(
                //     customProps[trimmedValue],
                //     `customProps[${trimmedValue}]`
                // )
                let valueWithFallback = `var(${trimmedValue}, ${customProps[trimmedValue]})`
                decl.value = valueWithFallback
            } else {
                const reg = /var\((?=.*var\()/gm
                let withFallbacks = []
                if (decl.value.search(reg) === -1) {
                    return
                } else {
                    const splitBySpace = decl.value.split(' ')
                    splitBySpace.forEach((val) => {
                        let trimmed = trimString(val)
                        const valueWithFallback = `var(${trimmed}, ${customProps[trimmed]})`
                        withFallbacks.push(valueWithFallback)
                    })
                    // console.log(withFallbacks.join(' '))
                    //convert back into a string. Ie, var(--spacing-0, 0rem) var(--spacing-1, 0.25rem)
                    decl.value = withFallbacks.join(' ')
                }
            }
        })
        // console.log('******************************')
        // console.log(customProps)
        // console.log('******************************')
    }
})

/**
 * indeterminate progerss, anything w/ internal props
 * Need things that use multiple props to work, ie: margin: var(--spacing-2) var(--spacing-3)
 *
 */
