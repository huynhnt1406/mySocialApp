<template >
    <div   class="product-info">
        <div class="product">
            <div class="product-left">
                <div class="big-img">
                    <img :src="data.productImgChild[0]" alt="">
                </div>
                <div class="small-img">
                    <img :src="data.productImgChild[1]" :alt="data.title">
                    <img :src="data.productImgChild[1]" :alt="data.title">
                </div>
            </div>
            <div class="product-right">
                <h3>{{data.title}}</h3>
                <p>{{data.description}}</p>
                <b-button  variant="success">Add To Cart</b-button>
            </div>
        </div>
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