const postcss = require('postcss')

//* Return the given string without "var" or parentheses
function trimString(s) {
    if (s.startsWith('var(') && s.endsWith(')')) {
        return s.slice(4, -1)
    } else return s
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
            let trimmedValue = trimString(decl.value)
            //If it's a custom prop, add the fallback value
            if (customProps[trimmedValue]) {
                let valueWithFallback = `var(${trimmedValue}, ${customProps[trimmedValue]})`

                decl.replaceWith({
                    prop: decl.prop,
                    value: valueWithFallback,
                })
            }
        })
    }
})
