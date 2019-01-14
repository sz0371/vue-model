<template>
	<div id="active-item">
		<ul class="item-list item">
			<!--<router-link to="" tag="li"  v-for=" v in itmList">{{v.name}}</router-link>-->
			<li v-for=" v in itmList">
				<router-link :to="'/activitiesList/'+v.path" exact>{{v.name}}-{{v.path}}</router-link>
			</li>
		</ul>
		<div class="item-content item">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name:"mag",
		data(){
			return {
				itmList:[
					{
						id:1,
						name:"王世中",
						age:"20",
						path:"wsz"
					},{
						id:2,
						name:"宋博",
						age:"26",
						path:"songbo"
					},{
						id:3,
						name:"潘伟",
						age:"24",
						path:"panwei"
					},{
						id:4,
						name:"转转",
						age:"25",
						path:"zhuanzhuan"
					},{
						id:5,
						name:"清清",
						age:"25",
						path:"qingqing"
					}
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	#active-item{
		overflow: hidden;
		width: 100%;
		height: 600px;
		border: 1px solid red;
	}
	.item{
		float: left;
	}
	.item-content{
		
		width: 500px;
		height: 500px;
		background-color: #42B983;
		margin-left: 200px;
		margin-top: 10px;
	}
	ul>li{
		margin-top: 6px;
	}
	ul>li:hover{
		cursor: pointer;
		font-size: 15px;
	}
</style>