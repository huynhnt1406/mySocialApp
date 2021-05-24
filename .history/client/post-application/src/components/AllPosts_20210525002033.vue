<template>
  <div class="posts-container">
      <div class="posts">
          <div class="each-posts" v-for="post in allPosts" :key="post._id">
              <h3>{{post.title}}</h3>
              <p>{{posts.content}}</p>
          </div>
      </div>
  </div>
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