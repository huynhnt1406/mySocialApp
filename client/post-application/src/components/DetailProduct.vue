<template >
    <div class="product-container">
        <div class="product-detail">
            <div class="product-left">
                <div class="big-img">
                    <img :src="data.productImgChild[0]" :alt="data.title">
                </div>
                <div class="small-img">
                </div>
            </div>
            <div class="product-right">
                <h3>{{data.title}}</h3>
                <p>{{data.description}}</p>
                <a-rate v-model="value" />
                <p>{{data.price}} VND</p>
                <b-button @click="addToCart"  variant="success">Add To Cart</b-button>
            </div>
        </div>
    </div>
</template>
<script>
const key = 'updatable';
import axios from 'axios'
export default {
    props:['id'],
    data(){
        return{
            data:{},
            value:4
        }
    },
    created(){
        axios.get(`http://localhost:3333/products/${this.id}`)
            .then(res => this.data = res.data)
            .catch(err => {
                console.log(err)
            })
    },
    methods:{ 
        async addToCart(){
            await axios.post(`http://localhost:3333/items/add`, this.data)
                .then(() => {
                    console.log('hello man')
                    this.$message.loading({ content: 'Adding', key });
                    setTimeout(() => {
                        this.$message.success({ content: `${this.data.title} in your shopping cart , check now!`, key, duration: 2 });
                    }, 1000);
                })
        }
    }
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
.big-img img{
    height: 400px;
    width: 400px;
}
.small-img img{
    height: 100px;
    width:100px;
    margin-top:10px;
    margin-right:10px;
}
.product-detail{
    display: flex;
    flex-wrap: wrap;
}
.product-left{
    flex:0.5;
    padding:10px;
    border-right:1px solid black;
}
.product-right{
    flex:1;
    padding:10px;
}
.product-container{
    max-width: 1200px;
    margin-left:auto;
    margin-right: auto;
}
</style>