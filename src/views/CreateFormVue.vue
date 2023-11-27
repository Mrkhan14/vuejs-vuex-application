<template>
	<div>
		<p class="text-center display-2">Create article</p>
		<ArticleForm
		:initiaValue='initiaValue'
		:onSubmitHander="createArtivleHandler"
		:clickText="'Create article'"
		/>
	</div>
</template>

<script>
// import{ CreateForm} from '@/components/'
import {mapState} from 'vuex'
import ArticleForm from '../components/ArticleForm.vue'
export default {
	components: {ArticleForm},
	data() {
        return {
            title: '',
            description: '',
            body: '',
        }
    },
	computed: {
        ...mapState({
            isLoading: state => state.control.isLoading,
        }),
		initiaValue(){
			return {
				title: '',
				description: '',
				body: '',
			}
		}
    },
	methods:{
		createArtivleHandler(article){
			this.$store.dispatch('createArticle', article);
			this.$router.push({ name: 'home' })
			console.log(article);
		}
	}
}
</script>