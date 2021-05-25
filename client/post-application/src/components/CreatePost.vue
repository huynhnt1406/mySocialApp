<template>
  <b-form class="m-5 p-5">
         <b-jumbotron class="post-container" header="Create Post" >
            <label for="author">Author:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.author"
              placeholder="Enter author"
              required
            ></b-form-input>
            <label for="author">Title:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.title"
              placeholder="Enter title"
              required
            ></b-form-input>
            <label for="author">Content:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.content"
              placeholder="Enter content"
              required
            ></b-form-input>    
             <label for="author">authorImg:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.authorImg"
              placeholder="Enter authorImg's link"
              required
            ></b-form-input>  
             <label for="author">imgPost:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="data.imgPost"
              placeholder="Enter imgPost's link"
              required
            ></b-form-input>  
            <label for="author">Create Time:</label>
            <h3>{{this.type}}</h3>
            <b-button @click="createPost" variant="success">Create</b-button>
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
    async createPost(){
        await axios.post(`http://localhost:3333/posts/add`, this.data)
          .then(() => {
            this.$router.push({name:'AllPosts'})
          })
    }
  }
}
</script>

<style>


</style>