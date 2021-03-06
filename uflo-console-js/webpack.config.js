/**
 * Created by Jacky.gao on 2016/5/17.
 */
var webpack = require('webpack');
module.exports = {
    entry: {
        todo:'./src/todo/index.jsx',
        central:'./src/central/index.jsx',
        calendar:'./src/calendar/index.jsx',
        designer:'./src/designer/designer.js',
        diagram:'./src/ProcessDiagram.js'
    },
    output: {
        path: '../uflo-console/src/main/resources/uflo-asserts/js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    compact:true
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=1000000&name=[name]-[hash].[ext]'
            }
        ]
    }
};