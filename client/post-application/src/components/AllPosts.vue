<template>
  <div class="posts-container">
      <div class="posts">
            <b-list-group  class="each-posts m-5" v-for="post in allPosts" :key="post._id">
                <b-list-group-item>
                        <div class="user-info">
                            <div class="author">
                                <img :src="post.authorImg" :alt="post.author">
                                <span>{{post.author}}</span>
                            </div>
                             <div class="btn-action">
                                <b-button  @click="deletePOST(post._id)" ><a-icon type="close" /></b-button>
                                <router-link class="link" :to="{name:'DetailPost', params:{id:post._id}}"> <b-button ><a-icon type="edit" /></b-button></router-link>
                            </div>
                        </div>
                        <div class="post-detail">
                            <b-jumbotron :header="post.title" >
                                <img :src="post.imgPost" alt="">
                                <p>{{post.content}}</p>
                            </b-jumbotron>
                            <div class="reactions">
                                <div class="btn">
                                      <b-button variant="success"><a-icon type="like" /></b-button>
                                    <span>{{post.likeCount}}</span>
                                </div>
                                <div class="btn">
                                    <b-button><a-icon variant="primary" type="dislike" /></b-button>
                                    <span>{{post.dislikeCount}}</span>
                                </div>
                                <div class="btn">
                                     <b-button variant="primary"> <a-icon type="share-alt" /></b-button>
                                    <span>{{post.shareCount}}</span>
                                </div>
                            </div>
                        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.user-info img{
    height: 60px;
    width:60px;
    border-radius: 50%;
    margin-right: 10px;
}
.post-detail img{
    height: 500px;
    width: 100%;
    padding-bottom:10px;
}
.user-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.user-info span{
    font-size: x-large;
}
.post-detail{
    font-family: "Poppins",sans-serif;
}
.link{
    margin-left:5px;
}
.posts{
    display: flex;
    justify-content: center;
    align-items: center;
    width:1000px;
    flex-direction: column;
}
.posts-container{
    display: flex;
    justify-content: center;
}
.reactions{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.btn{
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn-action{
    display: flex;
}
</style>