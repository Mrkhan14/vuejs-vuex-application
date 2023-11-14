<template>
    <div>
        Salom article details
    </div>
</template>
<script>
import { ArticlesDetail } from "../components/index"
export default {
    components: { ArticlesCard },
    mounted() {
        // console.log(this.$route.params.slug);
        this.$store.dispatch('articleDetai', this.$route.params.slug)
    },
}
</script>