# 项目目录结构

```
.
+--public/ : 公共资源文件目录，如图片，项目根 index.html 模板文件等 不需要被 webpack 编译的目录
|
|
+--build/ : 项目编译输出文件
|
|
+--src/ : 项目源文件
|
|
+--test/ : 项目测试文件目录
|
|
+--package.json : 项目配置文件，由 npm init 命令生成，包含项目的基本信息、依赖、仓库地址等信息
|
|
+--package-lock.json : 项目详细依赖信息，由 npm install 命令执行时自动生成，记录了项目的详细依赖信息，如库版本号，库的依赖等，package.json 只记录了依赖的基础信息
|
|
+--webpack.config.js : webpack 打包工具的配置文件，用于指定项目的入口，输入目录，开发工具、插件、排除目录等信息。
|
|
+--.babelrc : babel 转码器配置文件，内容也可以编写在 webpack.config.js 文件的 module->rules->options 字段内，为了使结构更加清晰抽离出来，指定转码的内容和规则等信息
|
|
+--.gitignore : git 忽略文件
```

