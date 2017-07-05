import * as mutations from './mutation-types'
import Vue from 'vue'
import Router from '@/router'

export default {
	[mutations.GET_SEARCH_QUERY] (state, query) {
		state.searchQuery = query
		state.searchResults = []

		if(query.trim()) {
			state.dataError.search = false
			Router.push('/search')
		}

		clearTimeout(state.timer)

		state.timer = setTimeout(function(){
			Vue.http.post(state.dataUrl.search, {
				body: {
					q: query
				}
			}).then(response => {
				if(response.body.status == "error") {
					state.dataError.search = true
				} else {
					state.searchResults = response.body
				}
			}, response => {
				alert('No response from server. Please check your connection or reload this page')
			})
		}, 1000);
	},

	[mutations.GET_DETAIL_HTML] (state, obj) {
		state.dataHtml = '<div class="panel-group" id="accordion" role="tablist">'

		for(var a in obj) {
		  state.dataHtml += `<div class="panel panel-default">
		  		<div class="panel-heading" role="tab" >
			      <h4 class="panel-title">
			        <a role="button">
			          ${a}
			        </a>
			      </h4>
			    </div>
			    <div class="panel-body"><table class="table table-bordered">`

			for(var b in obj[a]) {

				if(b == '_empty_' && obj[a][b] == '') {
					continue
				}

				let label = (b == '_empty_') ? '#' : b;

				state.dataHtml += `
					<tr>
						<th>${label.replace('_', ' ')}</th>
						<td>${obj[a][b]}</td>
					</tr>
				`
			}
			        
		 state.dataHtml += `</table></div>
			    </div>
			  </div>`
		}
	}
}