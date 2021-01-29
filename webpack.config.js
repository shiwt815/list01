const path = require('path')
const webpack = require('webpack')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const VueLoaderPlugin = require('vue-loader/lib/plugin')//vue-loade
const compiler = require('vue-template-compiler')
//console.log('__dirname: ', __dirname)// E:\my\作业\vueList\newtodoList
//console.log('path.resolve: ', path.resolve(__dirname, 'dist'))// E:\my\作业\vueList\newtodoList\dist

// const SRC_PATH=path.resolve(__dirname,"dist")
// const webpack = require('webpack')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
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
   target:'web',
   devServer: {
    // historyApiFallback: true,/不跳转
    // hot: false,
    inline: true, //实时刷新
    open: true, // 自动拉起浏览器
    hot: false, // 热加载 // true只更新修改的部分，而不是刷新整个页面
    // grogress: true,

    port: 5000, // 本地服务器端口号
    contentBase:'./dist'//设置服务器访问的基本目录
  },
  //配置自带插件--watch的刷新频率
  watchOptions: {
    poll: 1000,//监测修改的时间(ms)
    aggregateTimeout: 500,//防止重复按键，500毫秒内算按一次
    ignored: /node_modules/,//不监测
  },
    //的main.js中引入了template，这种属于compiler模式  重新引用vue文件
    resolve: {
    	extensions:['.vue','.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js', //内部为正则表达式  vue结尾的
        
        }
    },
   plugins: [
  		new VueLoaderPlugin(),//vue-loade
      new webpack.HotModuleReplacementPlugin(),  // 热更新插件
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
        //style-loader css-loader
        {
          //正则表达式匹配.css为后缀的文件
          test: /\.(css|scss)$/,
          //使用loader
          use: [
            { loader: 'style-loader' },
            { loader: "css-loader" }
          ]
        },
  	  	//babel-loader
		    {
		      	test: /\.js$/, // 使用正则来匹配 js 文件
		      	exclude: /node_modules/, // 排除依赖包文件夹
		      	use: {
		        	loader: 'babel-loader' // 使用 babel-loader
		      	}
		    },
            //vue-loader
		    {
                test:/\.vue$/,//通过loader来预处理文件 允许你打包除了js之外的任何静态资源
                use:'vue-loader'
            },
            //url-loader
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000 //图片小于20kb则转成base64打包入js文件
                        }
                    }
                ]
            },


	 	]
	}
}
// console.log('sssssssssss: ',path.join(__dirname, 'index.html'))
