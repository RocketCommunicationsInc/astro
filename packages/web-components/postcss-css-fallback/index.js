/**
 * @type {import('postcss').PluginCreator}
 */

const { Declaration } = require('postcss')

const FALLBACK_VALUE_REGEX = /var\(\s*--[\w-]+\s*,([^)]*\)|[^)]*)\s*\)/g

function shouldAddFallback(decl) {
    // `str.includes` is 3-5% faster than using RegEx matching for this expression
    if (!decl.value.includes('var(')) {
        return false
    }

    const siblings = decl.parent.nodes.filter((n) => {
        return n.prop === decl.prop
    })

    // If there is more than one CSS declaration for the same property, we assume that
    // the other declaration is either a fallback for this declaration, or it overrides
    // this declaration. In either case, we don't want to add a fallback.
    //
    // Of course, this assumption is not always true. We could have a style rule
    // that contains multiple declarations for the same property, but the property appears
    // first is not intended to be a fallback:
    //
    // .sloppy {
    //    color: var(--defaultTextColor);
    //    color: var(--overrideTextColor);
    // }
    //
    // For the sake of simplicity and performance, we do not account for this case. In the
    // above example, this plugin will not add any fallbacks.
    return siblings.length === 1
}

function getFallbackValue(cssDeclValue) {
    let cssDeclFallbackValue = cssDeclValue

    // Here's an example string value for `cssDeclValue` to use when thinking about what
    // this function does:
    //
    // `linear-gradient(to left, var(--color1, #4a6da7) 0%, var(--color2, #474747) 100%)`

    const fallbackValues = Array.from(
        cssDeclValue.matchAll(FALLBACK_VALUE_REGEX)
    )

    /* eslint-disable max-len */
    // fallbackValues is an array of RegEx matches:
    // [
    //    [
    //       'var(--color1, #4a6da7)',
    //       '#4a6da7',
    //       index: 43,
    //       input: 'linear-gradient(to left, var(--color1, #4a6da7) 0%, var(--color2, #474747) 100%)',
    //       groups: undefined
    //    ],
    //    ...
    // ]
    /* eslint-enable max-len */
    if (fallbackValues.length === 0) {
        return undefined
    }

    for (const fallbackValueMatch of fallbackValues) {
        // Replace the var statement with the fallback value. For example, this operation
        // turns:
        //
        // linear-gradient(to left, var(--color1, #4a6da7) 0%, var(--color2, #474747) 100%)
        //
        // into:
        //
        // linear-gradient(to left, #4a6da7 0%, var(--color2, #474747) 100%)
        cssDeclFallbackValue = cssDeclFallbackValue.replace(
            fallbackValueMatch[0],
            fallbackValueMatch[1].trim()
        )
    }

    if (cssDeclFallbackValue === cssDeclValue) {
        return undefined
    }

    return cssDeclFallbackValue
}

//* Return the given string without "var" or parentheses
function trimString(s) {
    if (s.startsWith('var(') && s.endsWith(')')) {
        return s.slice(4, -1)
    } else return s
}

module.exports = (opts = {}) => {
    //Store all CSS Custom prop declarations. This obj looks like:
    /*
  {
    '--opacity-disabled': '40%',
    '--color-background-base-default': '#101923',
    '--color-background-base-header': '#172635',
    '--color-background-base-hover': '#142435',
  } ...ect
  */
    const variables = {}
    return {
        postcssPlugin: 'add-fallbacks',
        prepare(result) {
            return {
                Declaration(node) {
                    /**
                     * If the node has a variable, and that variable DOES NOT include the var(), then it's
                     * the OG value of the custom prop. Store that.
                     */
                    if (node.variable) {
                        if (!node.value.includes('var(--')) {
                            variables[node.prop] = node.value
                        }
                    }

                    //remove the var(--) from the node, and find the reference to it in variables
                    let trimmedValue = trimString(node.value)
                    if (variables[trimmedValue]) {
                        // concat the value as it would be with it's fallback
                        let valueWithFallback = `var(${trimmedValue}, ${variables[trimmedValue]})`
                        //replace the node/declaration with the fallback
                        node.replaceWith({
                            prop: node.prop,
                            value: valueWithFallback,
                        })
                    }
                    console.log(result, 'result')
                },
            }
        },
    }
}
module.exports.postcss = true

/*
   Root(root) {
                    root.walkDecls((decl) => {
                        console.log(
                            decl.source.input.from,
                            'should be src stylesheet?'
                        )
                        let isValid = trimString(decl.value)
                        console.log(isValid)
                        console.log(variables)
                        if (variables[isValid]) {
                            let strWithFallback = `${decl.prop}: var(${isValid}, ${variables[isValid]});`
                            console.log(strWithFallback)
                            let valueWithFallback = `var(${isValid}, ${variables[isValid]})`
                            console.log(valueWithFallback, 'valueWithFallback')
                            decl.replaceWith(strWithFallback)
                            decl.replaceWith({
                                prop: decl.prop,
                                value: valueWithFallback,
                            })
                            decl.remove()
                        }
                //* We have the variables obj that contains all the declarations of
                //* our css vars. It looks like:
                          {
                            '--opacity-disabled': '40%',
                            '--color-background-base-default': '#101923',
                            '--color-background-base-header': '#172635',
                            '--color-background-base-hover': '#142435',
                          } ...ect

                          So, when we encounter a decl that has a value of one of these keys,
                          we can repalceWith the same decl, but the value is now the matching key and the value that
                          matches that key.




                // })
                // },
*/
