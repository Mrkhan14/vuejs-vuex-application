<template>
	<div v-if="article">
		<div class="row">
			<div class="mt-4 col-md-12">
				<p class="fs-2">
					{{ article.title }}
				</p>
			</div>
			<div class="mt-4 col-md-12 col-lg-8">
				<p class="opacity-75">Description:</p>
				<p class="font-monospace">
					{{ article.description }}
				</p>
			</div>
			<div class="mt-4 col-md-12 col-lg-2">
				<p class="opacity-75">Created At:</p>
				<p class="font-monospace">
					{{ new Date(article.createdAt).toLocaleString('uzb') }}
				</p>
			</div>
			<div class="mt-4 col-md-12 col-lg-2">
				<p class="opacity-75">Updated At:</p>
				<p class="font-monospace">
					{{ new Date(article.updatedAt).toLocaleString('uzb') }}
				</p>
			</div>
		</div>

		<div class="row">
			<div class="mt-4 col-md-12 col-lg-4">
				<p class="opacity-75">Author:</p>
				<div class="d-flex gap-3">
					<img  :src="article.author.image" alt="author" class="img-thumbnail rounded-circle">
					<!-- <p v-else class="font-monospace">
						{{ article.author.username[0] }}
					</p> -->
					<p class="font-monospace fw-blod">
						{{ article.author.username }}
					</p>

				</div>
			</div>
			<div class="mt-4 col-md-12 col-lg-8">
				<p class="opacity-75">Body:</p>
				<p class="font-monospace">
					{{ article.body }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	computed: {
		...mapState({
			article: state => state.articles.articleDetail,
		}),
	},
}
</script>

<style></style>