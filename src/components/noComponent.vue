<template>
	<div>
		<h1>无组件</h1>
		<div class="top-box">
			<span>名称：</span>
			<input type="text" v-model="nameValue">
			<span>时间：</span>
			<input type="text" v-model="timeValue">
			<button @click="submit">提交</button>
			<button @click="delAll">全部删除</button>
		</div>
		<table :class="{ red: isActive }">
			<tr>
				<th>编号</th>
				<th>名称</th>
				<th>时间</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item, index) of list" :key="index">
				<td>{{index+1}}</td>
				<td>{{item.nameValue}}</td>
				<td>{{item.timeValue}}</td>
				<td><button @click="del(index)">操作</button></td>
			</tr>
		</table>
		<button @click="colorBtn">{{color}}色按钮</button>
	</div>
</template>
<style>
	.red{border:1px solid red;}
</style>
<script>
	export default {
		data(){
			return {
				nameValue:"",
				timeValue:"",
				isActive:false,
				color:"红",
				list:[
					{
						nameValue:"3",
						timeValue:"ffdf"
					},
					{
						nameValue:"4",
						timeValue:"ggggg"
					},
					{
						nameValue:"5",
						timeValue:"jjjjj"
					}
				],
			}
		},
		methods:{
			submit:function(){
				// console.log(this.nameValue);
				// console.log(this.timeValue);
				this.list.push({nameValue:this.nameValue,timeValue:this.timeValue});
				this.nameValue="";
				this.timeValue="";
			},
			del:function(index){
				this.list.splice(index,1);
			},
			delAll:function(){
				console.log("ok");
				this.list=[];
			},
			colorBtn:function(){
				this.isActive=!this.isActive;
				this.isActive ? this.color="灰" : this.color="红"
			}
		}
	}
</script>