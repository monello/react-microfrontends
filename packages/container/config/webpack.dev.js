/**
 * Webpack Config just for Development
 */

// Use the webpack merge() function that will allow us to merge together multiple webpack configs.
const { merge } = require('webpack-merge');
// Import the Module Federation plugin here and not in the common config, because we will have slighly different set-up for Dev vs Prod
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// Import package.json so we can get access to the dependencies
const packageJson = require('../package.json');

// Pull in the Common Webpack config, in order to merge it with this Development config
const commonConfig = require('./webpack.common');

// In this config we create the config object in a JS object instead of directly in `module.exports` so that we can merge this with the common Webpack config
const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    output: {
        publicPath: 'http://localhost:8080/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:8083/remoteEntry.js'
            },
            // The trick here is that "shared" can also take an object that specifies version numbers
            shared: packageJson.dependencies
        })
    ]
};

// Finally we merge the Common and Dev configs and export the resulting Config as our FULL Development config
// - The order is important: The config that is listed to the left of another config will override any of the same properties in the config on it's right
// - Meaning the that settings in the right-most config takes priority
module.exports = merge(commonConfig, devConfig);
