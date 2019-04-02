export default {
  searchResults: [],
  dataHtml: "",
  searchQuery: "",
  dataUrl: {
    search: "/api/gsm.php?type=search",
    details: "/api/gsm.php?type=detail&s="
  },
  dataError: {
    search: null,
    detail: null
  },
  timer: null
};
