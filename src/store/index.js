import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {  //取值 commit
    increment (state) {
      state.count++
    },
    descrease (state) {
    	state.count--
    }
  },
  actions: {   //不必要元素；取值用dispatch //可执行异步操作，（一般用于数据请求）
    incrementAction (context) {
      context.commit('increment');
  	},
  	descreaseAction (context) {
  		context.commit ("descrease");
  	}
  },
   getters: {
  	getState(state){
  		if(state.count>=0){
  			state.count = state.count;
  		}else{
  			state.count = 0;
  		}
  		return state.count;
  	}
  }
 
})