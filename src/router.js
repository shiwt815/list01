import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './App.vue';
import isComponent from './components/isComponent.vue';
import noComponent from './components/noComponent.vue';

//创建路由对象
var router = new VueRouter({
    routes: [{
    	path: '/App',
    	component: App,
    	children:[
	        {  
	        	path: '/isComponent', 
	        	component: isComponent 
	    	},
	        { 
	        	path: '/noComponent', 
		        component: noComponent 
		    }
    	]
    }]
})

// 暴露 路由
export default router