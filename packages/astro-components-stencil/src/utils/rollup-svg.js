const { optimize } = require('svgo');

const usePlugin = (fileName) => {
    return /.svg$/i.test(fileName);
}

const decodeBase64SourceText = (sourceText) => {
    let [, base64Code] = sourceText.split('base64,');
    if (!base64Code) {
        return null;
    }

    base64Code = base64Code.slice(0, base64Code.indexOf(`';`));

    return Buffer.from(base64Code, 'base64').toString();
}

exports.svgOptimizerPlugin = () => {
    return {
        name: 'rollup-svg-optimizer-plugin',
        transform(sourceText, fileName) {
            if (!usePlugin(fileName) || sourceText === '') {
                return null;
            }

            const svgBase64 = decodeBase64SourceText(sourceText);
            if (!svgBase64) {
                return null
            }

            const result = optimize(svgBase64, { path: fileName});
            return {
              id: fileName,
              code: `export default '${result.data}'`,
            }
        },
    };
}
