/**
 * Webpack Config just for Production
 */
const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

// This environment variable will be set up when the build our Production deployment pipeline
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                // Note that here we now use a string-litaral (interpolation) to pull in the PRODUCTION domain
                // The "/marketing" folder here is an ASSUMPTION at this stage and might have to be tweaked when the deployment pipeline set-up is complete
                // The reason we need a folder is that we will be deploying all our apps (3 remotes and a container) to the same domain for the course purposes
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);
