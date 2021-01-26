<template>
	<div id="app">
		<h1>TodoList</h1> 
		<router-link to="/isComponent">有组件</router-link>
    	<router-link to="/noComponent">无组件</router-link>
<!--     	因为使用render 渲染 会覆盖el指定的内容覆盖，所以需要把 放在需要渲染的内容中 -->
    	<router-view></router-view>
	</div>
</template>