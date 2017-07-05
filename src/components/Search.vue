<template>
  <div class="search">
    <div v-if="dataError.search">
    	<div class="alert alert-warning">
    		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    		<strong>Tidak ada hasil pencarian handphone.</strong>
    	</div>
    </div>
	<div v-else-if="searchResults.length < 1">
		<div class="alert alert-info">
			<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			<strong>Searching {{ searchQuery }}...</strong>
		</div>
	</div>
    <div v-else>
    	<div class="row">
    		<div v-for="row in searchResults.data" class="col-md-3 col-sm-6">
    			<div class="phone-items" :title="row.title">
    				<div class="thumbnail">
    					<img :src="row.img" alt="">
    				</div>
    				<h4>{{ row.title }}</h4>
    				<router-link class="btn btn-default btn-sm" :to="{name: 'detail', params: {

    				slug: row.slug
    				}}">View</router-link>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Router from '@/router'

export default {
  computed: {
  	...mapGetters([
  		'dataError',
  		'searchResults',
  		'searchQuery'
  	])
  },
  methods: {
  	checkEmpty() {
  		if(!this.searchQuery) {
  			Router.push('/')
  		}
  	},
  	...mapActions([
  		'getSearchQuery'
  	])
  },
  watch: {
    '$route.params.slug' (n, o) {
      this.getSearchQuery(this.searchQuery)
    }
  },
  created() {
  	this.checkEmpty(),
  	this.getSearchQuery(this.searchQuery)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.phone-items {
	text-align: center;
	margin-bottom: 15px;
	
}

.phone-items h4 {
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis; 
}

.thumbnail > img {
	min-height: 212px;
	max-height: 212px;
}
</style>
