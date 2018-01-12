<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="light" fixed>
      <router-link tag="b-navbar-brand" class="pointer" to="/" id="home">Security Panel</router-link>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <router-link tag="div" to="/phone" size="md">
            <b-button variant="outline-primary" class="my-2 my-sm-0" right exact>Phone</b-button>
          </router-link>
          <router-link tag="div" to="/gpio" size="md">
            <b-button variant="outline-primary" class="my-2 my-sm-0" right exact>GPIO</b-button>
          </router-link>
          <router-link tag="div" to="/gateway" size="md">
            <b-button variant="outline-primary" class="my-2 my-sm-0" right exact>SMS</b-button>
          </router-link>
          <router-link tag="div" to="/logs" size="md">
            <b-button variant="outline-primary" class="my-2 my-sm-0" right exact>Logs</b-button>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .pointer:hover {
    cursor: pointer
  }
  button  {
    margin: 2px
  }
  :hover {
    cursor: pointer
  }
</style>
