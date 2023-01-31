import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { svgOptimizerPlugin } from './src/utils/rollup-svg'
import { angularOutputTarget } from '@stencil/angular-output-target'
import { angularValueAccessorBindings } from './wrapper-bindings/angular.bindings'
import { angularProxiesListIgnore } from './wrapper-bindings/angular-proxies-list-ignore'
// import { reactOutputTarget } from '@stencil/react-output-target'
//* Custom react-output-target that allows for treeshaking.
//* Once https://github.com/ionic-team/stencil-ds-output-targets/issues/255 is fixed, we can go back to stencils.
import { reactOutputTarget } from 'react-output-target'
import { reactBooleanFix } from './wrapper-bindings/react-boolean-fix'

export const config: Config = {
    namespace: 'astro-web-components',
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        reactOutputTarget({
            componentCorePackage: '@astrouxds/astro-web-components',
            proxiesFile: '../react/src/components.tsx',
            //polyfills & defineCustomElements cannot be included at the same time as importCustomElements
            includePolyfills: false,
            includeDefineCustomElements: false,
            includeImportCustomElements: true,
            customElementsDir: 'dist/components',
        }),
        reactBooleanFix({
            attatchPropsFile:
                '../../react/src/react-component-lib/utils/attachProps.ts',
        }),
        angularOutputTarget({
            componentCorePackage: '@astrouxds/astro-web-components',
            directivesProxyFile:
                '../angular-workspace/projects/angular/src/directives/proxies.ts',
            directivesArrayFile:
                '../angular-workspace/projects/angular/src/directives/proxies-list.ts',
            valueAccessorConfigs: angularValueAccessorBindings,
        }),
        angularProxiesListIgnore({
            proxiesListFile:
                '../../angular-workspace/projects/angular/src/directives/proxies-list.ts',
        }),
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'docs-json',
            file: './docs.json',
        },
        {
            type: 'dist-custom-elements',
        },
        {
            type: 'docs-readme',
            strict: true,
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers,
            copy: [
                {
                    src: '**/*.html',
                },
                {
                    src: 'global/test.css',
                },
            ],
        },
    ],
    plugins: [sass(), svgOptimizerPlugin()],
    enableCache: true,
    extras: {
        appendChildSlotFix: true,
    },
    testing: { modulePathIgnorePatterns: ['tests/'] },
}
