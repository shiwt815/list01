<template>
	<div>
		<h1>有组件</h1>
		<div class="top-box">
			<span>名称：</span>
			<input type="text">
			<span>时间：</span>
			<input type="text">
			<button>提交</button>
			<button>全部删除</button>
		</div>

		<ctable></ctable>
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
		// 	submit:function(){
		// console.log(1)
		// 	},
		}
	}
</script>