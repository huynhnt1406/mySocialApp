<template >
    <div   class="product-info">
        <b-jumbotron>
            <template #header>{{data.title}}</template>
        </b-jumbotron>
    </div>
</template>
<script>
import fetch from 'node-fetch'
export default {
    props:['id'],
    data(){
        return{
            data:{}
        }
    },
       async created(){
        const res =  await fetch(`http://localhost:3333/products/${this.id}`)
        const respData = await res.json()
        console.log(respData)
        this.data = respData
    },
}
</script>
<style >
.product-left img{
    height: 500px;
    width: 500px;
}
.product{
    display: flex;
}
</style>