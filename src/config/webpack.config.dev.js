const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js'); // 引入公共配置
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');  //热部署

module.exports = merge(commonConfig, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: '[name].[contenthash].bundle.js',
    },
    plugins: [
        new ReactRefreshWebpackPlugin({
            overlay: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/i,
                include: path.resolve(__dirname, '../../src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve(__dirname, './babel.config.json'),
                            plugins: [
                                require.resolve('react-refresh/babel'),
                            ],
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        proxy: [
            {
                context: '/api',
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
            }
        ],
        //兼容前端浏览器路由，解决开发环境下刷新 / 直接访问子路由的 404 问题
        historyApiFallback: true,
    },

})