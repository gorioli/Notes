var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
//var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {

    //entry: [ './js/main.js'],
    entry: {
        app: path.resolve(__dirname, 'js/main.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        //filename: 'app.js'
    },

    module: {
        //noParse: [pathToReact],

        loaders: [{
            test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
            exclude: [node_modules],
            loader: 'babel' // The module to load. "babel" is short for "babel-loader"
        }]
    }
};

module.exports = config;
