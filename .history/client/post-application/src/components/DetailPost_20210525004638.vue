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
        await axios.get(`http://localhost:3333/posts/${this.id}`)
            .then(res => res.data = this.data)
            .then(console.log(this.data))
            .catch(err => {
                console.log(err)
            })

    },
}
</script>

<style>

</style>