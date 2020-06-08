import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    status: ''
  },
  getters:{
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },
  actions: {
    AUTH_REQUEST: ({commit, dispatch}, user) => {
      commit('AUTH_REQUEST');
      return new Promise((resolve, reject) => {
        //-----------------------------
        axios({
          url: 'https://tamasha.com/signin',
          data: user,
          method: 'POST'
        }).then(result => {
          const token = result.data.token;
          localStorage.setItem('user-token', token);
          axios.defaults.headers.common['Authorization'] = token;
          commit('AUTH_SUCCESS', token);
          dispatch('USER_REQUEST');
          resolve(result);
        }).catch(err => {
          commit('AUTH_ERROR', err);
          localStorage.removeItem('user-token');
          reject(err);
        });
        //-----------------------------
      });
      
    },
    AUTH_LOGOUT: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            commit('AUTH_LOGOUT')
            localStorage.removeItem('user-token')
            // remove the axios default header
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    }
  },
  mutations: {
    'AUTH_REQUEST': state => {
      state.status = 'loading';
    },
    'AUTH_SUCCESS': (state, token) => {
      state.status = 'success';
      state.token = token;
    },
    'AUTH_ERROR': state => {
      state.status = 'error'
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('AUTH_LOGOUT')
      .then(() => {
        this.$router.push('/login')
      })
    }
  },
})
