
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
module.exports = {
    entry: path.join(__dirname, '../index.tsx'),
    stats: {
        modules: false,
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.temp_cache'),
    },
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
        alias: {
            '@': path.resolve(__dirname, '../../src'),
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'], // 优先尝试 .tsx,ts再jsx,js
    },
}