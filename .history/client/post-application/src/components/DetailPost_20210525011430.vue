<template>
      <b-form class="m-5">
        <label for="author">Author:</label>
        <b-form-input class="mb-2 mt-2"
          id="input-2"
          v-model="data.author"
          required
        ></b-form-input>
        <label for="author">Title:</label>
        <b-form-input class="mb-2 mt-2"
          id="input-2"
          v-model="data.title"
          required
        ></b-form-input>
        <label for="author">Content:</label>
        <b-form-input class="mb-2 mt-2"
          id="input-2"
          v-model="data.content"
          required
        ></b-form-input>
        <label for="author">Created At:</label>
        <b-form-input class="mb-2 mt-2"
          id="input-2"
          v-model="data.createdAt"
          required
        ></b-form-input>
        <label for="author">Updated At:</label>
        <b-form-input
          id="input-2" class="mb-2 mt-2"
          v-model="data.updatedAt"
          required
        ></b-form-input>
        <b-button variant="success">Update</b-button>
      </b-form>
      
</template>

<script>
import fetch from 'node-fetch'
export default {
    name:'DetailPost',
    props:['id'],
    data(){
        return{
            data:[]
        }
    },
    async mounted(){
        const res =  await fetch(`http://localhost:3333/posts/${this.id}`)
        const respData = await res.json()
        this.data = respData
        console.log(this.data)
    }
}
</script>

<style>

</style>