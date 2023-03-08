<template>

    <main class="form-signin w-25 m-auto">
        <form>
            <img :src="logo" alt="logo"  @click="toHomeHandler">
            <h1 class="h3 mb-3 fw-normal">Register</h1>

            <Input :type="'text'" :label="'Name'" ></Input>           
            <Input :type="'email'" :label="'Email'" ></Input>           
            <Input :type="'password'" :label="'Password'"></Input>     

            <Button type="submit" :disabled="isLoading" @click="submitHandler" >Sign in</Button>
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
    computed: {
        isLoading() {
            return this.$store.state.auth.isLoading;
        }
    },
    mounted() {
        
    },

    methods: {
        submitHandler(e){
            e.preventDefault();
            const data = {
                username: "sasasaaassasa",
                email: "qqqqqqsasasssaqqqqq@mail.ru",
                password: "awewwrq",
            }
            this.$store.dispatch('register', data).then(user => console.log('user', user)).catch(err => console.log('Error', err))

        }
    },
};
</script>

<style lang="scss" scoped>

</style>