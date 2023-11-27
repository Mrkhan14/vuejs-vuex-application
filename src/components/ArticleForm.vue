<template>
	<div class="w-50 mx-auto">
		<form @submit.prevent>
			<Input type="text" label="Title" v-model="title" />
			<TextArea type="text" label="Description" v-model="description" />
			<TextArea type="text" label="Body" v-model="body" />
			<Button
				:disabled="isLoading"
				@click="editArticle"
				>
				{{ clickText }}
			</Button>
		</form>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	props: {
		initiaValue:{
			type: Object,
			required: true,
		},
		onSubmitHander: {
			type: Function,
			required: true,
		},
		clickText: {
			type: String,
			required: true,
		}
	},
	data() {
		return {
			title: this.initiaValue.title,
			description: this.initiaValue.description,
			body: this.initiaValue.body,

		}
	},
	computed: {
        ...mapState({
            isLoading: state => state.control.isLoading,
        }),
    },
	methods: {
		editArticle() {
			const article = {
				title: this.title,
				body: this.body,
				description: this.description,
				tagList: [],
			}
			this.onSubmitHander(article)
		},
	},
}
</script>