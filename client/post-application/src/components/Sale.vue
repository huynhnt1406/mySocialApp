<template>
  <b-form class="m-5 p-5">
         <b-jumbotron class="post-container" header="Upload a product" >
            <label for="author">Title</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="product.title"
              placeholder="Product's name"
              required
            ></b-form-input>
            <label for="author">Description</label>
            <b-form-input class="mb-2 mt-2"

              id="input-2"
              v-model="product.description"
              placeholder="Product's description"
              required
            ></b-form-input>
             <label for="author">Product's image </label> 
             <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="product.productImgChild"
              placeholder="Product's image"
              required
            ></b-form-input> 
            <label for="author">Price </label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="product.price"
              placeholder="Product's price"
              required
            ></b-form-input>    
            <b-button @click="Sale"  variant="success">Sale now</b-button>
         </b-jumbotron>
    </b-form>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            product:{}
        }
    },
    methods:{
        async Sale(){
            await axios.post('http://localhost:3333/products/create', this.product)
            .then(console.log('created user successfully'))
            .catch(err => {
                console.log('err',err)
            })
            this.$router.push({name:'Shop'})
            this.$notification.open({
                message: 'mySocial Notification',
                description:`${this.product.title }has been sold successfully`
            })    
        }
    }
}
</script>

<style >
.date{
    display: flex;
    flex-direction: column;
}
</style>