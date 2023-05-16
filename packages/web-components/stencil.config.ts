import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { svgOptimizerPlugin } from './src/utils/rollup-svg'
import { angularOutputTarget } from '@stencil/angular-output-target'
import { angularValueAccessorBindings } from './wrapper-bindings/angular.bindings'
import { reactOutputTarget } from '@stencil/react-output-target'
import { reactBooleanFix } from './wrapper-bindings/react-boolean-fix'
import { postcss } from '@stencil/postcss'
import addFallbacks from '@astrouxds/postcss-custom-property-token-fallback'
import reference from '@astrouxds/tokens/dist/json/base.reference.json'
import system from '@astrouxds/tokens/dist/json/base.system.json'
import component from '@astrouxds/tokens/dist/json/base.component.json'
//misc global vars that have yet to be made tokens
const oneOffs = {
    'indeterminate-gradient':
        'conic-gradient(rgba(77, 172, 255, 0), rgba(51, 51, 51, 0), rgba(77, 172, 255, 0.3), rgba(77, 172, 255, 0.6), rgba(77, 172, 255, 0.7), rgb(77, 172, 255))',
    'indeterminate-nub-color': '#4dacff',
    'standby-fill': '#2dccff',
    'standby-border': '#2dccff',
    'standby-fill-opacity': '0',
    'critical-fill': '#ff3838',
    'critical-border': '#ff3838',
    'serious-fill': '#ffb302',
    'serious-border': '#ffb302',
    'caution-fill': '#fce83a',
    'caution-border': '#fce83a',
    'normal-fill': '#56f000',
    'normal-border': '#56f000',
    'off-fill': '#a4abb6',
    'off-border': '#a4abb6',
    'container-footer-color-background': '#172635',
    'container-header-color-background': '#172635',
}
const tokens = Object.assign({}, reference, system, component, oneOffs)
export const config: Config = {
    namespace: 'astro-web-components',
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        reactOutputTarget({
            componentCorePackage: '@astrouxds/astro-web-components',
            proxiesFile: '../react/src/components.tsx',
            includePolyfills: true,
            includeDefineCustomElements: true,
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
    plugins: [
        sass(),
        svgOptimizerPlugin(),
        postcss({
            plugins: process.env.PROD ? [addFallbacks({ index: tokens })] : [],
        }),
    ],
    enableCache: true,
    extras: {
        appendChildSlotFix: true,
        experimentalImportInjection: true,
    },
    testing: { modulePathIgnorePatterns: ['tests/'] },
}
