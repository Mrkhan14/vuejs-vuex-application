<template>
	<div>
		<!-- <CreateForm/> -->
		<div class="w-50 mx-auto">
			<form @submit.prevent>
				<Input
                :label="'Title'"
                :type="'text'"
                v-model="title"
            	/>

				<TextArea
                :label="'Description'"
                :type="'text'"
                v-model="description"
            	/>

				<TextArea
                :label="'Bady'"
                :type="'text'"
                v-model="body"
            	/>

				<Button
					type="submit"
					:disabled="isLoading"
					@click="createArtivleHandler"
				>
					Create article
				</Button>

			</form>
		</div>
	</div>
</template>

<script>
// import{ CreateForm} from '@/components/'
import {mapState} from 'vuex'
export default {
	components: {

	},
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
    },
	methods:{
		createArtivleHandler(){
			const article = {
                title: this.title,
                body: this.body,
                description: this.description,
				tagList: []
            }
			this.$store.dispatch('createArticle', article);
			this.$router.push({ name: 'home' })
			console.log(article);
		}
	}
}
</script>