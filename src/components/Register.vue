<template>

    <main class="form-signin w-25 m-auto">
        <form>
            <img :src="logo" alt="logo"  @click="toHomeHandler">
            <h1 class="h3 mb-3 fw-normal">Register</h1>
            <Input :type="'text'" :label="'Name'"  v-model="username"></Input>           
            <Input :type="'email'" :label="'Email'" v-model="email"></Input>           
            <Input :type="'password'" :label="'Password'" v-model="password"></Input>     

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
            logo,
            username: '',
            email: '',
            password: '',
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
            // this.$store.commit('registerStart')
            const data = {
                username: "axadaa12",
                email: "axadaa22@mail.ru",
                password: "axad1322",
            }
            this.$store
                .dispatch('register', data)
                .then(user => 
                    console.log('USER', user)
                )
                .catch(err => console.log('Error', err))

        }
    },
};
</script>

<style lang="scss" scoped>

</style>