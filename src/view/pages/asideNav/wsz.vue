<template>
	<div>
		我是王世中，呵呵=>{{getCount.count}}
		<button @click="addfun">加加</button>--
		<button @click="delfun">减减</button>
	</div>
</template>

<script>
	export default {
		name:"wsz",
		data(){
			return {
				msg:"wsz"
			}
		},
		mounted(){
			console.log("页面加载")
		},
		methods:{
			addfun(){
				this.$store.commit("increment");
			},
			delfun(){
				this.$store.commit("descrease");
			}
		},
		computed:{
			getCount(){
				return {
					count: this.$store.getters.getState
				}
			}
		}
	}
</script>

<style>
</style>