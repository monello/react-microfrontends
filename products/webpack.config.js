const HrmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new HrmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
