<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!this.$store.getters.isLoggedIn" to="/login">Login</router-link>
      <span v-else @click="logout"><router-link  to="/logout">Logout</router-link></span>
    </div>
</template>

<script>
export default {
  name: 'navBar',
  methods:{
      logout:function(){
          this.$store.dispatch('logout').then(()=>{
            this.$router.push('/login')
          });
      }
  },
}
</script>