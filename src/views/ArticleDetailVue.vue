<template>
    <div>
        Salom article details
    </div>
</template>
<script>
// import { mapState } from 'vuex';
export default {
    // computed: {
    //     ...mapState({
    //         data: state => state.articles.data,
    //         isLoading: state => state.articles.isLoading,
    //         error: state => state.articles.error
    //     })
    // },
    mounted() {
        // console.log(this.$route.params.slug);
        this.$store.dispatch('articleDetai', this.$route.params.slug)
    },
}
</script>