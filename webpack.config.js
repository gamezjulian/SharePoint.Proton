var path = require('path'),
    webpack = require('webpack');

module.exports = {
    context: path.resolve('src/app'),
    entry: ["./app"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/',
        filename: "bundle.js"
    },
    watch: true,

    devServer: {
        contentBase: 'src/public'
    },

    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            "window.jQuery": 'jquery'
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            }
        ]
    },

    // which extensions are resolver when require('') is called
    resolve: {
        extensions: ['*', '.js', '.es6']
    }
}