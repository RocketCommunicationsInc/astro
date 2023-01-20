/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
    // Work with options here

    return {
        postcssPlugin: 'postcss-css-fallback',
        Root(root, postcss) {
            console.log('hello', root)
            // Transform CSS AST here
        },

        /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

        /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
    }
}

module.exports.postcss = true
