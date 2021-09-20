export default {
  data() {
    return {
      loading: true,
      api: null
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api     = null;
      fetch(`http://localhost:3000${url}`)
      .then(response => response.json())
      .then(jsonResponse => {
        setTimeout(() => {
          this.api = jsonResponse;
          this.loading = false;
        }, 1000)
      })
    }
  },
}