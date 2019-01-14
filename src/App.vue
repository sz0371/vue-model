<template>
  <div id="app">
  	<Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/footer"
import Header from "./components/header"
export default {
  name: 'App',
  data(){
  	return {
  		msg:""
  	}
  },
  components:{
  		Footer,
  		Header
  	}
}
</script>

<style>
a.active{
	color: red;
}
</style>
