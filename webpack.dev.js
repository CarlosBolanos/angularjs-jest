const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode:'development',
    devServer: {
        contentBase: './dist',
        open: true,
        port:8081
    },
    devtool:'inline-source-map'
});
