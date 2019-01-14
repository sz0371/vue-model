<template>
	<div class="project-footer">
		<el-pagination
		  background
		  layout="prev, pager, next"
		  :total="1000">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		name:"project-footer",
		data(){
			return {
				msg:"footer-content"
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	
</style>