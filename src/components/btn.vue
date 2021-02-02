<template>
	<div >
		<button @click="colorBtn">{{colorValue}}色按钮</button>
	</div>
</template>
<script>
	export default{
	  	name: 'app',
  	  	props:['colorValue'],

	  	methods:{
			colorBtn:function(){
				this.$emit("pmethods")
			}
		}

	}
</script>

