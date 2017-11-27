<template>
    <div>
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-brand href="#">Basement Panel</b-navbar-brand>

        <b-navbar-nav class="ml-auto">

          <router-link tag="b-button" to="/phone" exact size="sm" class="my-2 my-sm-0" right>Phone</router-link>
          <router-link tag="b-button" to="/gpio" exact size="sm" class="my-2 my-sm-0" right>GPIO</router-link>
          <router-link tag="b-button" to="/gateway" exact size="sm" class="my-2 my-sm-0" right>SMS Gateway</router-link>
          <router-link tag="b-button" to="/logs" exact size="sm" class="my-2 my-sm-0" right>Logs</router-link>
        </b-navbar-nav>
      </b-navbar>
  </div>
</template>
<script>

</script>
