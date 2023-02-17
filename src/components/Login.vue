<template>

    <main class="form-signin w-25 m-auto">
        <form>
            <img :src="logo" alt="logo"  @click="toHomeHandler">
            <h1 class="h3 mb-3 fw-normal">Login</h1>
            <Input :type="'email'" :label="'Email'" ></Input>           
            <Input :type="'password'" :label="'Password'" ></Input>
            <Button type="submit">Sign in</Button>
        </form>
    </main>
</template>

<script>
import {logo} from '../contstants'
export default {
    name: 'Login',

    data() {
        return {
            logo
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>