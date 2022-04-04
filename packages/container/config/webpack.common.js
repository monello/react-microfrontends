/**
 * Webpack Config common to both Development and Production
 * This will be merged with either `webpack.dev.js` or `webpack.prod.js` depending on whether we are building for Development or Production respectively
 */

// Moved this to common config as it will be needed in both DEV and PROD
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',              // This will process all the JSX and React-related code
                            '@babel/preset-env'                 // Convert all modern JS down to ES5
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime'   // Add in some additional code to enable some features for or App in the browswer like, async-await etc
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};
