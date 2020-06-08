<template>
    <form class="login" @submit.prevent="login">
    <h1>KiMiA</h1>
    <h6>Sign in</h6>
    <input type="text" placeholder="username" required v-model="username"/>
    <input type="password" placeholder="password" required v-model="password"/>
    <button type="submit">Login</button>
    </form>
</template>

<script>
export default {
    name: 'login',
    data:function(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login: function(){
            const { username, password } = this;
            this.$router.push('about');
            console.log('login',this);
            this.$store.dispatch('AUTH_REQUEST', { username, password }).then(() => {
                this.$router.push('/')
            })
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '@/sass/main.sass';
    $width: 300px;
    .login
        margin: auto
        h1, h6
            margin: $margin 0
        &, & > *
            width: 100%
            max-width: $width

        *
            display: block
            box-sizing: border-box    
            outline: none

        h1
            color: $color

        button
            background: $color
            border: 0
            padding: $padding
            color: $white
            &:hover
                background: $color-light
            &:focus
                background: $color-dark

        input
            border: none
            background: $white

            &[type="text"], &[type="password"]
                border-bottom: $border
                padding: $padding
                margin-bottom: $margin
                &:focus
                    border-bottom: 1px solid $color
                    box-shadow: $box-shadow
</style>