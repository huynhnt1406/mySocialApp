<template>
  <b-navbar class="p-2" toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">Post Management</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/"><b-nav-item >All Posts</b-nav-item></router-link>
        <router-link to="/create"> <b-nav-item>Create a Post</b-nav-item></router-link> 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>