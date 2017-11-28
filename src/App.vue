<template>
  <div id="app">
    <app-header />
    <div id='content'>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style scoped>
#content { 
  margin: 16px
}
</style>


