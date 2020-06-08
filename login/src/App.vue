<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name:'app',
  components:{
    NavBar
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
