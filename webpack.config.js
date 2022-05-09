const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: {
            keep: /\.git/,
        },
    },
    devServer: {
        static: './dist',
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'Virtual Keyboard',
            filename: 'index.html',
            template: "src/index.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};