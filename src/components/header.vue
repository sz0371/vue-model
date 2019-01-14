<template>
	<div class="project-header">
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item>
		  	<router-link to="/" exact>首页</router-link>
		  </el-breadcrumb-item>
		  <el-breadcrumb-item>
		  	<router-link to="/activityManagement">活动管理</router-link>
		  </el-breadcrumb-item>
		  <el-breadcrumb-item>
		  	<router-link to="/activitiesList">活动列表</router-link>
		  </el-breadcrumb-item>
		  <el-breadcrumb-item>
		  	<router-link to="/activityDetail">活动详情</router-link>
		  </el-breadcrumb-item>
		   <el-breadcrumb-item>
		   	<a href=""></a>
		  </el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default {
		name:"progect-header",
		data(){
			return {
				msg:"header-content"
			}
		}
	}
</script>

<style scoped>
	a{
		cursor: pointer;
	}
</style>