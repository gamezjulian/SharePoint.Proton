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
            { test: /\.html$/, exclude: /node_modules/, use: ["html"] },
            { test: /\.ts?$/, exclude: /node_modules/, use: ["ts"] }
        ]
    },

    resolveLoader: {
        moduleExtensions: ["-loader"]
    },

    // which extensions are resolver when require('') is called
    resolve: {
        extensions: ['*', '.js', '.es6', '.ts'],
    }
}