<template>
	<div>
			<tr>
				<td>{{indexsort}}</td>
				<td>{{content.nameValue}}</td>
				<td>{{content.timeValue}}</td>
				<td><button>操作</button></td>
			</tr>
	</div>
</template>
<script>
	export default {
	  name: 'app',
  	  props:['content',"index"],
	 
	}
</script>