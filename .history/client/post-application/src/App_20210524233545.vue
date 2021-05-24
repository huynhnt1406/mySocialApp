<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './core/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
</style>
