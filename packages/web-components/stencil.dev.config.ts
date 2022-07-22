import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
    tsconfig: './tsconfig.dev.json',
    namespace: 'astro-web-components',
    globalStyle: 'src/global/global.scss',
    outputTargets: [
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
            type: 'www',
            serviceWorker: null, // disable service workers,
            copy: [
                {
                    src: '**/*.html',
                },
            ],
        },
    ],
    plugins: [sass()],
    extras: {
        appendChildSlotFix: true,
    },
}
