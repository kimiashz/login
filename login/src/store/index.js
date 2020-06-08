import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin:{user:'kimia', pass:'123456'},
    token: localStorage.getItem('user-token') || '',
    status: ''
  },
  getters: {
    isLoggedIn: state => !!state.token
  },
  mutations: {
    request: state => {state.status='loading';},
    success: (state, token) => {
      state.token = token;
      state.status='success';
    },
    error: state => {state.status='error';},
    logout: state => {state.status='';state.token='';},
  },
  actions: {
    login: ({commit, state}, data) => {
      let { username, password } = data,
      {user, pass} = state.admin;
      return new Promise(function(resolve, reject){
        if(user === username && pass === password){
          let token = 'kimia is the best';
          resolve(token);
        }else{
          reject('user or pass are not match.');
        }
      }).then((token) => {
        localStorage.setItem('user-token', token);
        commit('success', token);
      }).catch((error) => {
        localStorage.removeItem('user-token');
        commit('error', error);
      });
      
    },
    logout: ({commit})=>{
      return new Promise(function(resolve){
        localStorage.removeItem('user-token');
        commit('logout');
        resolve();
      });
    }
  }
})
