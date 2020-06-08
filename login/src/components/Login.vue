<template>
    <form class="login" @submit.prevent="login" >
        <h1>KIMIA</h1>
        <h6>Sign in</h6>
        <input type="text" v-model="username" required placeholder="Username" />
        <input type="password" v-model="password" required placeholder="Password" />
        <button type="submit">Sign In</button>
    </form>
</template>

<script>
export default {
    name:'login',
    components:{}
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