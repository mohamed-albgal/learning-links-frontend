//craco.config.js


//could not use emotion's css prop whilst also using cra. can work with craco per: https://github.com/emotion-js/emotion/issues/1123
const emotionPresetOptions = {};
const emotionBabelPreset = require("@emotion/babel-preset-css-prop").default(
    undefined,
    emotionPresetOptions
);

module.exports = {
    babel: {
        plugins:[
            ...emotionBabelPreset.plugins
        ],
    },
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}