<template>
      <b-form class="m-5">
        <b-form-input class="mb-2"
          id="input-2"
          placeholder="Enter name"
          required
        ></b-form-input>
        <b-form-input class="mb-2"
          id="input-2"
          placeholder="Enter name"
          required
        ></b-form-input>
        <b-form-input class="mb-2"
          id="input-2"
          placeholder="Enter name"
          required
        ></b-form-input>
        <b-form-input class="mb-2"
          id="input-2"
          placeholder="Enter name"
          required
        ></b-form-input>
        <b-form-input
          id="input-2" class="mb-2"
          placeholder="Enter name"
          required
        ></b-form-input>
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