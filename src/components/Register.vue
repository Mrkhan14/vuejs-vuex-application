<template>

    <main class="form-signin w-25 m-auto">
        <form>
            <img :src="logo" alt="logo"  @click="toHomeHandler">
            <h1 class="h3 mb-3 fw-normal">Register</h1>
            <Input :type="'text'" :label="'Name'" ></Input>           
            <Input :type="'email'" :label="'Email'" ></Input>           
            <Input :type="'password'" :label="'Password'"></Input>          
            <Button type="submit">Sign in</Button>
        </form>
    </main>
</template>

<script>
import {logo} from '../contstants'
export default {
    name: 'Register',

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