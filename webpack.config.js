var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var WebpackStrip = require('webpack-strip');

var config = {
    devtool: 'source-map',

    entry: {
        app: ['webpack/hot/dev-server', path.resolve(__dirname, 'js/main.js')]
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        sourceMapFilename: 'maps/hello_source.map'
    },

    devServer: {
        contentBase: ".",
        hot: true
    },

    module: {
        noParse: [path.resolve(node_modules, 'react/dist/react.min.js')],

        loaders: [
            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                exclude: [node_modules],
                loaders: ['babel']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
