<template>
    <div class="col col-md-4">
        <div class="card position-relative">
            <img class="card-img-top" src="./../../public/Screenshot_1.png"
                style="height: 280px; width: 100%; display: block;">
            <div class="card-body">
                <h5 class="card-title">{{ articleProps.title.slice(0, 50) }}...</h5>
                <p class="card-text">{{ articleProps.description.slice(0, 100) }}...</p>
                <p class="text-muted">{{ new Date(articleProps.createdAt).toLocaleString('uzb') }}</p>
                <button @click="navigeteHendler" class="btn btn-primary" style="margin-right: 10px;">Show</button>
                <button
                    v-if="articleProps.author.username == user.username"
                class="btn btn-danger">Delet</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'ArticlesCord',
    props: {
        articleProps: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    },
    methods: {
        navigeteHendler(){
            return this.$router.push(`/article/${this.articleProps.slug}`)
        }
    },
}
</script>