<template>
  <b-navbar class="p-2" toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">mySocial <a-icon type="smile" /></b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link class="links" to="/">All Posts</router-link>
        <router-link class="links" to="/create">Create a Post</router-link> 
      </b-navbar-nav>s
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>
.links{
  color:white;
  margin:5px;
  padding:5px;
  border:1px solid white;
  width: 100px;
}
</style>