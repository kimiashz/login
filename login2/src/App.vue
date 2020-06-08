<template>
  <div id="app">
    <login-form/>
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/Nav.vue';
import LoginForm from './components/Login.vue';

export default {
  name:'login',
  components:{
    NavBar,
    LoginForm
  }
}
</script>

<style lang="sass">
  @import './sass/main.sass';

  #nav 
    padding: $padding

    a 
      font-weight: bold
      color: $gray
      display: inline

      &.router-link-exact-active 
        color: $color 
</style>
