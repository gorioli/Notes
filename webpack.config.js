var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
//var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
    devtool: 'source-map',

    //entry: [ './js/main.js'],
    //entry: ['webpack/hot/dev-server', './js/main.js'],
    entry: {
        app: ['webpack/hot/dev-server', path.resolve(__dirname, 'js/main.js')]
        //app: [path.resolve(__dirname, 'js/main.js')],
        // Since react is installed as a node module, node_modules/react,
        // we can point to it directly, just like require('react');
        //vendors: ['react']
    },

    output: {
        //path: './build/',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        sourceMapFilename: 'maps/hello_source.map'
    },

    devServer: {
        //contentBase: "./build",
        contentBase: ".",
        //noInfo: true, //  --no-info option
        hot: true
        //inline: true,
        //lazy: true,
    },

    //resolve: {
    //    alias: {
    //        'react': pathToReact
    //    }
    //},

    module: {
        noParse: [path.resolve(node_modules, 'react/dist/react.min.js')],

        loaders: [
            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
                //loaders: ['babel-loader'],
                //loader: 'babel' // The module to load. "babel" is short for "babel-loader"
            },
            //{
            //    test: /\.js$/,
            //    exclude: /node_modules/,
            //    loader: "babel-loader"
            //}
            //{
            //    test: /\.png$/,
            //    loader: "file?name=[name].[ext]"
            //},
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
        //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

module.exports = config;
