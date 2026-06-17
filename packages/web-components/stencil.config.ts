import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { svgOptimizerPlugin } from './src/utils/rollup-svg'
import { angularOutputTarget } from '@stencil/angular-output-target'
import { angularValueAccessorBindings } from './wrapper-bindings/angular.bindings'
import { reactOutputTarget } from '@stencil/react-output-target'
import { reactBooleanFix } from './wrapper-bindings/react-boolean-fix'
import { postcss } from '@stencil/postcss'

export const config: Config = {
    namespace: 'astro-web-components',
    globalStyle: 'src/global/global.scss',
    sourceMap: false,
    excludeComponents: ['rux-icon-*'],
    outputTargets: [
        {
            type: 'dist-custom-elements',
            externalRuntime: false,
        },
        reactOutputTarget({
            // componentCorePackage: '@astrouxds/astro-web-components',
            // proxiesFile: '../react/src/components.tsx',
            // includePolyfills: true,
            // includeDefineCustomElements: true,
            outDir: '../react/src',
        }),
        // reactBooleanFix({
        //     attatchPropsFile:
        //         '../../react/src/react-component-lib/utils/attachProps.ts',
        // }),
        // angularOutputTarget({
        //     componentCorePackage: '@astrouxds/astro-web-components',
        //     directivesProxyFile:
        //         '../angular/projects/angular/src/directives/proxies.ts',
        //     directivesArrayFile:
        //         '../angular/projects/angular/src/directives/proxies-list.ts',
        //     valueAccessorConfigs: angularValueAccessorBindings,
        // }),
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'docs-json',
            file: './docs.json',
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
    plugins: [
        sass(),
        // svgOptimizerPlugin(),
        postcss(),
    ],
    enableCache: true,
    extras: {
        appendChildSlotFix: true,
        enableImportInjection: true,
    },
}
