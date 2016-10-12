var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ],
        loaders: [
            { test: /\.json$/, loader: "json" },
            { test: /\.js$/, loader: "babel", include: path.resolve('./src') },
            { test: /\.scss$/,loaders: ["style", "css", "sass"], include: path.resolve('./src') },
        ]
    },
    resolve: {
        alias: {
            // alias any requires to the react module to the one in our path, otherwise
            // we tend to get the react source included twice when using npm link.
            react: path.resolve('./node_modules/react'),
        },
    },
    plugins: [
        new webpack.IgnorePlugin(/^olm/)
    ],
    devtool: 'source-map'
};
