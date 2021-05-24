<template>
  <div class="posts-container">
      <div class="posts">
          <div class="each-posts" v-for="post in allPosts" :key="post._id">
              <h3>{{post.title}}</h3>
              <p>{{post.content}}</p>
              <button @click="deletePOST(post._id)">Delete</button>
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
        ...mapActions(["getPosts","deletePost"]),
        deletePOST(id){
            if(id){
                this.deletePost(id)
                alert('delete successfully')
                console.log('delete successfully')
            }else{
                alert('delete failed')
            }
        }
        
    }
}
</script>

<style>

</style>