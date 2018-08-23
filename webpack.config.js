//webpack 配置文件是一个 CommonJS 文件，因此可以使用 node.js 加载模块的 require 方法
// path 是 node.js 的一个模块
const path = require('path');

// 用于访问 webpack 内置插件
const webpack = require('webpack');

// 用于将资源文件内的 html 模板 文件一并打包到输出目录，并自动添加上 js 脚本
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 用于自动打开浏览器的插件
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// path 模块的一个方法，返回组合路径，前面加上 __dirname 这个全局变量，可以防止不同操作系统之间的文件路径问题
// 具体函数作用，见: https://nodejs.org/api/path.html#path_path_resolve_paths
// publicPath: 公共资源文件输出目录
const publicPath = path.resolve(__dirname,'public');

// outputPath: 输出文件目标目录
const outputPath = path.resolve(__dirname,'build');

const srcPath = path.resolve(__dirname,'src');

module.exports = {
    //设置当前模式为开发模式
    mode: "development",

    //指定程序的入口，相当于 mian 函数
    entry: path.resolve(srcPath, 'index.js'),

    // 关于项目中每个模块的配置，关于模块的定义见: https://webpack.docschina.org/concepts/modules/
    module: {

        // 模块编译规则（配置 loader，解析器等选项）
        rules: [

            // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
            // test 和 include 具有相同的作用，都是必须匹配选项
            // exclude 是必不匹配选项（优先于 test 和 include）
            // 最佳实践：
            // - 只在 test 和 文件名匹配 中使用正则表达式
            // - 在 include 和 exclude 中使用绝对路径数组
            // - 尽量避免 exclude，更倾向于使用 include
            {
                test: /\.(js|jsx)?$/,  // 匹配以.js或.jsx结尾的文件
                exclude: /(node_modules)/, // 排除 node_modules 文件夹下的所有文件
                loader: "babel-loader" // 使用 babel-loader 进行转换
            },
            {
                test: /\.css$/, // 匹配以 .css 结尾的文件
                use: ['style-loader', 'css-loader'] // 使用 style-loader 和 css-loader 进行转换
            }
        ]
    },

    // 解析项目编译所包含的模块类型和路径等
    //
    resolve: {

        //指定 webpack 可以解析哪些拓展名的文件，配置后可以在 文件引入时不带拓展名
        extensions: ['*','.js','.jsx']
    },

    // webpack 如何输出结果的相关选项
    output: {

        // 所有输出文件的目标路径
        path: outputPath,

        // 输出解析文件的目录 不是资源文件的目录
        // publicPath: publicPath,

        //打包文件名
        filename: "bundle.js"
    },

    // 开发工具 方便定位错误，参数见：https://webpack.docschina.org/configuration/devtool
    devtool: 'inline-source-map',

    devServer: {
        // contentBase: outputPath,
        contentBase: publicPath,
        hot: true,
        historyApiFallback: true
    },

    plugins: [
        // 官方推荐，使其更容易查看要修补(patch)的依赖
        new webpack.NamedModulesPlugin(),
        // 热替换插件 避免每次代码修改后刷新页面
        new webpack.HotModuleReplacementPlugin(),

        // 用于将资源文件内的 html 模板文件一并打包到输出目录，并自动添加上 js 脚本
        new HtmlWebpackPlugin({
            template: './public/index.html', //指定 html 模板文件路径
            filename: 'index.html', //指定输出文件名
        }),

        new OpenBrowserPlugin(
            {
                url: 'http://localhost:8080'
            }
        ),
    ]
    // // devServer 字段： 配置开发服务器，指定服务在本地运行的端口、根目录、静态资源实际目录等。
    // devServer: {
    //     contentBase: path.join(__dirname,'public'),
    //     port: 3000,
    //     publicPath: "http://localhost:3000/dist"
    // },
    // // // 最后 plugins 字段里，我们加入了一个 Hot Module Replacement 插件的实例。这个用于 热更新，避免每次代码修改后刷新页面。
    // plugins: [new webpack.HotModuleReplacementPlugin()]
}
