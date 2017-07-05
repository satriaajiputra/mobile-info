import * as mutations from './mutation-types'

export default {
	getSearchQuery(context, query) {
		context.commit(mutations.GET_SEARCH_QUERY, query)
	},

	getDetailHtml(context, obj) {
		context.commit(mutations.GET_DETAIL_HTML, obj)
	}
}