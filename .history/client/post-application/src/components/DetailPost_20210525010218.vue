<template>
  <div class="post-container">
      <div v-for="ele in data" :key="ele.id" class="post-detail">
          <h3>{{ele.title}}</h3>
      </div>
  </div>
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