<template>
	<div id="active-item">
		我是清清，嘿嘿--{{getCount}}
		<button @click="addfun">加加</button>
		<button @click="delfun">减减</button>
	</div>
</template>

<script>
	export default {
		name:"qingqing",
		data(){
			return {
				msg:"qingqing",
				
			}
		},
		methods:{
			addfun(){
				this.$store.dispatch("incrementAction");
			},
			delfun(){
				this.$store.dispatch("descreaseAction");
			}
		},
		computed:{
			getCount(){
				return this.$store.getters.getState;
			}
		}
	}
</script>

<style>
</style>