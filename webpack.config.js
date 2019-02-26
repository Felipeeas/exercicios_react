const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js',
        library: 'require',
    },
    devServer:{
        port: 8080,
        contentBase: './public'
    },
    resolve:{
        extensions: ['', '.js', '.jsx'] // para não precisar colocar a extensão nos imports
    },
    // plugins:[
    //     new ExtractTextPlugin('app.css')
    // ],
    module: {
        loaders:[{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
                
            }

        }
        // ,{
        //     test: /\.css$/,
        //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        // }
    ]
    }
}