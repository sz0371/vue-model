<template>
	<div class="projecr-loayout">
		<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="30%"
		  :before-close="handleClose">
		  <span>这是一段信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
		<div class="index-home">
			<Home />
		</div>
		<div class="router-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Home from "./pages/home"
	export default {
		name:"index-content",
		data(){
			return {
				msg:"index-content",
				dialogVisible: false
			}
		},
		components : {
			Home
		},
		methods:{
			handleClose(done) {
	        this.$confirm('确认关闭？')
	          .then(_ => {
	            done();
	          })
	          .catch(_ => {});
	      }
		},
		created(){
			console.log(15665);
			this.$axios.post("/mall/wx/home/index",{
				parmas: {
					id:4,
					name:"wsz"
				}
				
			})
			.then(res => {
				console.log(res)
				
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
</script>

<style scoped="scoped">
	.projecr-loayout{
		width: 100%;
		height: 600px;
		border: 1px solid red;
	}
</style>