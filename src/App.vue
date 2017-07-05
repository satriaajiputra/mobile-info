<template>
  <div id="app" class="container">
    <div class="form-group">
      <input type="text" placeholder="Search phone name or type" @input="getSearchQuery($event.target.value)" class="form-control">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'searchQuery'
    ])
  },
  methods: {
    ...mapActions([
      'getSearchQuery'
    ])
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
* {
  border-radius: 0 !important;
}
.container {
  max-width: 960px;
}
input.form-control, input.form-control:focus {
  box-shadow: none;
  min-height: 50px;
}
</style>
