const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = merge(common, {
    mode:'production',
    devtool:'none',
    devServer: {
        contentBase: './dist',
        open: true,
        port:8082
    },
    plugins: [        
        new UglifyJSPlugin({ sourceMap: true }),
        new ngAnnotatePlugin({add: true })
    ]
});
