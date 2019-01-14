<template>
	<div class="activities-list">
		<ItemList />
	</div>
</template>

<script>
	import ItemList from "./asideNav/items"
	export default {
		name : "activitiesList",
		data(){
			return {
				msg:"activities list"
			}
		},
		components:{
			ItemList
		},
		methods:{
			
		}
	}
</script>

<style>
</style>