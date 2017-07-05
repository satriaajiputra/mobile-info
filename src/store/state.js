export default {
	searchResults: [],
	dataHtml: '',
	searchQuery: '',
	dataUrl: {
		search: 'http://phone.satmaxt.xyz/api/gsm.php?type=search',
		details: 'http://phone.satmaxt.xyz/api/gsm.php?type=detail&s='
	},
	dataError: {
		search: null,
		detail: null
	},
	timer: null
}