<template>
  <h3>this is detail post</h3>
</template>

<script>
import axios from 'axios'
export default {
    name:'DetailPost',
    props:['id'],
    data(){
        return{
            data:[]
        }
    },
    async created(){
        await axios.get(`http://localhost:3333/posts/${id}`)
            .then(res => this.data = res.data)
            .then(console.log(this.data))
            .catch(err => {
                console.log({msg:'error server'})
            })

    },
}
</script>

<style>

</style>