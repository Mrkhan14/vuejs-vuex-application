<template>
    <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
        <a class="d-flex align-items-center text-dark text-decoration-none">
            <img :src="logo" alt="logo" @click="toHomeHandler">
        </a>
        <!-- {{ user }} -->
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <template v-if="isLoggedIn">
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'home' }">
                    <div> {{ user.username }}</div>
                    <div>{{ user.email }}</div>
                </RouterLink>
            </template>
            <template v-if="!isLoggedIn">
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'login' }">Login</RouterLink>
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'register' }">Register
                </RouterLink>
            </template>
        </nav>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { logo } from '../contstants'
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
        ...mapState({
            user: state => state.auth.user,
            isLoggedIn: state => state.auth.isLoggedIn
        })
    },

    methods: {
        toHomeHandler() {
            return this.$router.push('/')
        },
    },
};
</script>

<style lang="scss" scoped></style>