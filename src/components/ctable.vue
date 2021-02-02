<template>
	<tr>
		<td>{{indexsort+1}}</td>
		<td>{{content.nameValue}}</td>
		<td>{{content.timeValue}}</td>
		<td><button @click="del(indexsort)">操作</button></td>
	</tr>
</template>
<script>
	export default {
	  name: 'app',
  	  props:['content',"indexsort"],
	  methods:{
	  	del:function(){
			this.$emit("zdel", this.indexsort)
	  	}
	  }
	}
</script>