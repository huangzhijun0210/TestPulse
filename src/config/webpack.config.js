
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
                    {
                        //控制 CSS 模块化
                        loader: 'css-loader',
                        options: {
                            //css 里通过 @import 引入的其他样式文件，也能按顺序经过前面 1 个 loader 处理
                            importLoaders: 1,
                            modules: {
                                auto: true, //只给 .module.文件开模块化
                                localIdentName: '[local]__[hash:base64:5]', //生成的类名格式(例：.layout__8f2d1)
                                exportLocalsConvention: 'asIs', //SCSS 里写啥类名，JS 里就得用啥名
                                namedExport: false  //是否禁用默认的默认导出
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            //处理 SVG/图片的 loader 规则
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // 匹配所有图片格式
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // 配置输出name和输出路径
                            name: '[name].[hash:8].[ext]',
                            outputPath: 'assets'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../../src'),
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'], // 优先尝试 .tsx,ts再jsx,js
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: '[name].[contenthash].bundle.js',
        // 设为绝对路径 /，解决动态路由相对路径出错的问题
        publicPath: '/',
    },
}
