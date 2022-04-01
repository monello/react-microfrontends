const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            library: { type: 'var', name: 'container' },
            remotes: {
                products: 'products',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
