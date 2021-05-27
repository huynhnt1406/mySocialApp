<template>
  <b-form class="m-5 p-5">
         <b-jumbotron class="post-container" header="Upload Video" >
            <label for="author">Author:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.authorName"
              placeholder="Video's author"
              required
            ></b-form-input>
            <label for="author">Title:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.title"
              placeholder="Video's title"
              required
            ></b-form-input>
            <label for="author">Description:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.description"
              placeholder="Video's description"
              required
            ></b-form-input>    
             <label for="author">Author's Url:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.authorUrl"
              placeholder="Author Image Link"
              required
            ></b-form-input>  
             <label for="author">Video's Url:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.videoUrl"
              placeholder="Video link"
              required
            ></b-form-input>  
            <label for="author">Create Time:</label>
            <h3>{{this.type}}</h3>
            <b-button @click="uploadVideo" variant="success">Upload</b-button>
         </b-jumbotron>
    </b-form>
</template>

<script>
import axios from 'axios'
export default {
  name:'CreatePost',
  data(){
    return{
      data:{},
      type: Date().toString()
    }
  },
  methods:{
    async uploadVideo(){
        await axios.post(`http://localhost:3333/videos/upload`, this.data)
          .then(() => {
            this.$router.push({name:'AllVideos'})
          })
    }
  }
}
</script>

<style>


</style>