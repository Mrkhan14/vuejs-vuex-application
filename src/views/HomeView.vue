<template>
    <div>
        <h1> Home</h1>
        <div class="row">
            <articles-card v-for="article in data" :articleProps="article" :key="article.id">
            </articles-card>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { ArticlesCard } from "../components/index"
export default {
    name: 'home',
    components: { ArticlesCard },
    computed: {
        ...mapState({
            data: state => state.articles.data,
            isLoading: state => state.articles.isLoading,
            error: state => state.articles.error
        })
    },
    mounted() {
        this.$store.dispatch('articles')
    },
};
</script>

<style lang="scss" scoped></style>