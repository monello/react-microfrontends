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
        publicPath: '/auth/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap'
            },
            // The trick here is that "shared" can also take an object that specifies version numbers
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);
