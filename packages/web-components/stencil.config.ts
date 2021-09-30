import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { svgOptimizerPlugin } from './src/utils/rollup-svg'
// import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
    namespace: 'astro-web-components',
    globalStyle: 'src/global/global.scss',
    outputTargets: [
        // reactOutputTarget({
        //   componentCorePackage: '@astrouxds/astro-web-components',
        //   proxiesFile: '../astro-in-react/src/components.ts',
        //   includePolyfills: true,
        //   includeDefineCustomElements: true
        // }),
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements-bundle',
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
            ],
        },
    ],
    plugins: [sass(), svgOptimizerPlugin()],
    enableCache: true,
    extras: {
        appendChildSlotFix: true,
    },
}
