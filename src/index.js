// 全局引入
import '@babel/polyfill'
// 测试 ES6 语法是否通过 babel 转译
const array = [1, 2, 3]
const isES6 = () => console.log(...array)

isES6()

const arr = [new Promise(() => {}), new Promise(() => {})]

arr.map(item => {
  console.log(item)
})


console.log("测试打包js文件");
console.log("测试打包es6转化");
console.log("测试打包jihkhkjnj");

import Vue from "vue";
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router';
import './a.css';

// new Vue({
// 	   // el:'#app',
//     // router: Router,
//     // store: Store,
//     render: h => h(App)
//  }).$mount("#app");

var vm = new Vue({
    el:'#app',
    data:{
        msg:''
    },
    // render:function(createElement){
    //     return createElement(login)
    // }
    //简写
    render:c=>c(App),
    router
})