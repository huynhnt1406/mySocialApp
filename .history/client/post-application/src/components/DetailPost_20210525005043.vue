<template>
  <h3>this is detail post</h3>
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