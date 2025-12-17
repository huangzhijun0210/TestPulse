module.exports = {
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: '[name].[contenthash].bundle.js',
        // 设为绝对路径 /，解决动态路由相对路径出错的问题
        publicPath: '/',
    },
}



