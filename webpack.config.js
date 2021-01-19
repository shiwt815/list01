const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

//console.log('__dirname: ', __dirname)// E:\my\作业\vueList\newtodoList
//console.log('path.resolve: ', path.resolve(__dirname, 'dist'))// E:\my\作业\vueList\newtodoList\dist
module.exports = {
   entry: {
    	app: './src/index.js' // 需要打包的文件入口
   },
   output: {
	    //publicPath: __dirname + '/dist/', // js 引用的路径或者 CDN 地址
	    publicPath: './',
	    path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
	    filename: 'bundle.js' // 打包后生产的 js 文件
   }, 
   devServer: {
    port: 5000, // 本地服务器端口号
    contentBase:'./dist'//设置服务器访问的基本目录
  },
   plugins: [
    	// new CleanWebpackPlugin(), // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
   		new HtmlWebpackPlugin({
		        // 打包输出HTML
		        title: '自动生成 HTML',
		        minify: {
		        // 压缩 HTML 文件
		        removeComments: false, // 移除 HTML 中的注释
		        collapseWhitespace: false, // 删除空白符与换行符
		        minifyCSS: false // 压缩内联 css
	        },
	        filename: 'index.html', // 生成后的文件名
	        template: path.join(__dirname, './index.html') // 根据此模版生成 HTML 文件
	    })
   ],
   module: {
	  	rules: [
		    {
		      	test: /\.js$/, // 使用正则来匹配 js 文件
		      	exclude: /node_modules/, // 排除依赖包文件夹
		      	use: {
		        	loader: 'babel-loader' // 使用 babel-loader
		      	}
		    }
	 	]
	}
}
// console.log('sssssssssss: ',path.join(__dirname, 'index.html'))
