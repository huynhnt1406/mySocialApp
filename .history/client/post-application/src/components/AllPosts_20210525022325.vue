<template>
  <div class="posts-container">
      <div class="posts">
            <b-list-group  class="each-posts m-5" v-for="post in allPosts" :key="post._id">
                <b-list-group-item>
                        <h3>{{post.author}}</h3>
                        <p>{{post.title}}</p>
                        <p>{{post.content}}</p>
                        <b-button class="m-2" @click="deletePOST(post._id)" variant="danger">Detele</b-button>
                        <router-link :to="{name:'DetailPost', params:{id:post._id}}"> <b-button variant="success">Edit</b-button></router-link>
                </b-list-group-item>
            </b-list-group>
      </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
const key = 'updatable';
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
                this.$message.loading({ content: 'Deleting...', key });
                setTimeout(() => {
                    this.$message.success({ content: 'Deleted!', key, duration: 2 });
                }, 1000);
            }else{
                alert('delete failed')
            }
        }
        
    }
}
</script>

<style>

</style>