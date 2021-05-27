<template >
    <div class="videos-container">
        <div class="posts">
              <b-jumbotron  header="Watch" class="post" >
                <b-list-group  class="each-posts m-5" v-for="video in allVideos" :key="video._id">
                    <b-list-group-item>
                        <div class="video-info">
                            <div class="author">
                                <img :src="video.authorUrl" :alt="video.authorName">
                                <span>{{video.authorName}}</span>
                            </div>
                        </div>
                        <div class="post-detail">
                            <b-jumbotron :header="video.title" class="video-container" >
                                <iframe  :src="video.videoUrl"  allowfullscreen></iframe>
                                <p>{{video.description}}</p>
                            </b-jumbotron>
                        </div>
                    </b-list-group-item>
                </b-list-group>
              </b-jumbotron>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'AllVideos',
    data(){
        return{
            data:{}
        }
    },
    computed:mapGetters(["allVideos"]),
    created(){
        this.getVideos()
    },
    methods:{
        ...mapActions(["getVideos"]),
    }
}
</script>
<style >
.author img{
    height:60px;
    width:60px;
    border-radius: 50%;
    margin-right: 10px;
}
.author span{
    font-size: x-large;
}
.video-container iframe{
    height: 500px;
    width: 100%;
}
.post{
    width: 100%;
}
.videos-container{
    display: flex;
    justify-content: center;
}
.video-info{
    padding-bottom: 10px;
}
</style>