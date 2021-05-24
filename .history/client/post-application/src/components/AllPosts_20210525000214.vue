<template>
  <h3>this is all posts page</h3>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name:'AllPosts',
    computed: mapGetters(["allPosts"]),
    created(){
        this.getPosts()
    },
    methods:{
        ...mapActions(["getPosts"])
    }
}
</script>

<style>

</style>