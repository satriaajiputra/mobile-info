<template>
	<div>
		<div v-if="detailResults.img">
			<center>
				<div class="thumbnail">
					<img :src="detailResults.img" alt="">
				</div>
				<h4>{{ detailResults.title }}</h4>
				<button class="btn btn-primary" @click="goBack">Back</button>
			</center>

			<div v-html="dataHtml"></div>
		</div>
		<div v-if="isLoading">
			<div class="alert alert-info">
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
				<strong>Loading details...</strong>
			</div>
		</div>
	</div>
</template>

<script>

	import { mapGetters, mapActions } from 'vuex'
	import Route from '@/router'

	export default {
		data() {
			return {
				detailResults: {},
				isLoading: true
			}
		},
		computed: {
			...mapGetters([
				'dataUrl',
				'dataHtml'
			])
		},
		methods: {
			...mapActions([
				'getDetailHtml'
			]),
			getDetails(slug) {
				this.$http.get(this.dataUrl.details+slug).then(response => {
					this.detailResults = response.body
					this.getDetailHtml(response.body.data)
					this.isLoading = false

					if(response.body.status == "error") {
						alert('No response from server. Please check your connection or reload this page')
					}
				})
				
			},
			goBack() {
				Route.go(-1)
			}
		},
		watch: {
		    '$route.params.slug' (n, o) {
		    	this.detailResults = {}
		    	this.getDetails(this.$route.params.slug)
		    }
		  },
		created() {
			this.detailResults = {}
			this.getDetails(this.$route.params.slug)
		}
	}
</script>

<style scoped>
	.thumbnail {
		padding: 0 !important;
		border:none !important;
	}
	.btn-primary {
		margin-bottom: 20px;
	}
</style>