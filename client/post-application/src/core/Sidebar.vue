<template >
    <div class="sidebar">
        <router-link class="links" to="/homepage">All Posts</router-link>
        <router-link class="links" to="/create">Create a Post</router-link> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
.sidebar{
    flex:0.15;
    height: 94vh;
    background-color: antiquewhite;
}
</style>