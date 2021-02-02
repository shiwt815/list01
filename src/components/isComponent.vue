<template>
	<div>
		<h1>有组件</h1>
		<div class="top-box">
			<span>名称：</span>
			<input type="text" v-model="nameValue">
			<span>时间：</span>
			<input type="text" v-model="timeValue">
			<button>提交</button>
			<button>全部删除</button>
		</div>

		<table>
			<tr>
				<th>编号</th>
				<th>名称</th>
				<th>时间</th>
				<th>操作</th>
			</tr>
			<ctable v-for="(item1 , index) of list" :key="index":indexsort="index" :content="item1"></ctable>
		</table>
	</div>
</template>
<script>
	import ctable from "./ctable"

	export default {
		components:{
			ctable
		},
		data(){
			return {
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
				// isActive:false,
				// color:"红",
				// list:[
				// 	{
				// 		nameValue:"3",
				// 		timeValue:"ffdf"
				// 	},
				// 	{
				// 		nameValue:"4",
				// 		timeValue:"ggggg"
				// 	},
				// 	{
				// 		nameValue:"5",
				// 		timeValue:"jjjjj"
				// 	}
				// ],
			}
		},
		methods:{
		// 	submit:function(){
		// console.log(1)
		// 	},
		}
	}
</script>