<template>
	<div>
		<h1>有组件</h1>
		<div class="top-box">
			<span>名称：</span>
			<input type="text" v-model="nameValue">
			<span>时间：</span>
			<input type="text" v-model="timeValue">
			<button @click="submit" :disabled="!nameValue || !timeValue">提交</button>
			<button @click="delAll">全部删除</button>
		</div>

		<table :class="{ red: isActive }">
			<tr>
				<th>编号</th>
				<th>名称</th>
				<th>时间</th>
				<th>操作</th>
			</tr>
			<ctable v-for="(item1 , index) of list" :key="index" :indexsort="index" :content="item1" @zdel="del"></ctable>

			<cbtn @pmethods="colorBtn" :colorValue="color"></cbtn>
		</table>
	</div>
</template>
<script>
	import ctable from "./ctable";
	import cbtn from "./btn";

	export default {
		components:{
			ctable,
			cbtn
		},
		data(){
			return {
				isActive:false,
				color:"红",
				nameValue:"",
				timeValue:"",
				list:[
					{
						nameValue:"1",
						timeValue:"ffdf"
					},
					{
						nameValue:"2",
						timeValue:"ggggg"
					},
					{
						nameValue:"3",
						timeValue:"jjjjj"
					}
				],
			}
		},
		methods:{
			submit:function(){
				this.list.push({nameValue:this.nameValue,timeValue:this.timeValue});
				this.nameValue="";
				this.timeValue="";
				console.log("添加一条数据");
			},
			delAll:function(){
				this.list=[];
				console.log("全部删除");
			},
			del:function(index){
				this.list.splice(index,1);
				console.log("删除本行");
			},
			colorBtn:function(){
				this.isActive = !this.isActive;
				this.isActive ? this.color="灰" : this.color="红";
				console.log("改变颜色");
			}
		}
	}
</script>
<style>
	.red{border:1px solid red;}
</style>