const path = require('path');
var MODULES = ['./', 'node_modules'];

module.exports = {
    entry: {
        app: './src/app.js',
        core: './src/core.js'
    },
    mode:'development',
    devtool: '#source-map',
    resolve: {
      modules: MODULES,      
    },
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};