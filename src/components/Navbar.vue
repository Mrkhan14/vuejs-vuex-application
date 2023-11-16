<template>
    <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
        <a class="d-flex align-items-center text-dark text-decoration-none">
            <img :src="logo" alt="logo" @click="toHomeHandler">
        </a>

        <nav class="d-inline-flex align-items-center mt-2 mt-md-0 ms-md-auto">
            <template v-if="isLoggedIn">
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'home' }">
                    <div> {{ curretUser.username }}</div>
                    <div>{{ curretUser.email }}</div>
                </RouterLink>
                <RouterLink class="btn btn-primary me-3 py-2 text-dark text-decoration-none" :to="{ name: 'crate-article' }">
                    Craete Article
                </RouterLink>
                <a href="#" class="btn btn-success me-3 py-2 text-dark text-decoration-none" @click="logout">Logout</a>
            </template>

            <template v-if="isAnonymous">
                <RouterLink
                    class="me-3 py-2 text-dark text-decoration-none"
                    :to="{ name: 'login' }">
                    Login
                </RouterLink>
                <RouterLink
                    class="me-3 py-2 text-dark text-decoration-none"
                    :to="{ name: 'register' }">
                    Register
                </RouterLink>
            </template>
        </nav>
    </div>
</template>



<script>
import {  mapGetters } from 'vuex';
import { logo } from '../contstants'
import { gettersTypes } from "./../modules/type"

export default {
    name: 'Navbar',
    data() {
        return {
            logo
        };
    },

    mounted() {

    },

    computed: {
        ...mapGetters({
            curretUser: gettersTypes.curretUser,
            isLoggedIn: gettersTypes.isLoggedIn,
            isAnonymous: gettersTypes.isAnonymous
        }),
    },
    methods: {
        toHomeHandler() {
            return this.$router.push('/')
        },
        logout() {
            return this.$store.dispatch("logout")
        }
    },
};
</script>

<style lang="scss" scoped></style>