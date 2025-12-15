
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
module.exports = {
    entry: path.join(__dirname, '../index.tsx'),
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, '../../index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/i,
                include: path.resolve(__dirname, '../../src'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'], // 优先尝试 .tsx,ts再jsx,js
    },
}