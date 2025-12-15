const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js'); // 引入公共配置
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');  //热部署

module.exports = merge(commonConfig, {
    mode: 'development',
    plugins:[
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
})