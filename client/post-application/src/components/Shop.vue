<template>
  <div>
    <div class="shop-header">
        <b-button v-b-toggle.sidebar-1 class="primary"><a-icon type="menu" /></b-button>
        <h3>myShop</h3>
    </div>
    <b-sidebar id="sidebar-1" title="Products" shadow>
      <div class="px-3 py-2">
        <p>
          mySocial is a social web to watch videos, read posts which users share .On the other hand we can share your products and ex-items , users can sale and buy these products in this mySocial web 
        </p>
        <b-list-group>
            <b-list-group-item  ><button @click="getProducts"> Technology</button> </b-list-group-item>
            <b-list-group-item><button @click="getHousetools">Home & Kitchen</button> </b-list-group-item>
            <b-list-group-item>Style</b-list-group-item>
            <b-list-group-item>Toys and others</b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
    <div class="show-products">
        <div class="products">
            <div v-for="product in products" :key=product._id class="product">
                <small>{{product.title}}</small>
                <p>{{product.price}} đ</p>
                <div class="img-product">
                    <img :src="product.productImgChild[0]" :alt="product._id"/>
                </div>
                <div class="actUser">
                    <b-button  variant="success">Detail</b-button>
                    <b-button variant="outline-primary">Add To Cart</b-button>
                </div>
            </div>
        </div>
    </div>
     <div class="show-videos">
        <div v-for="video in videos" :key=video.id class="product">
            <h3>{{video.title}}</h3>
        </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios'
export default {
  data() {
    return {
      collapsed: false,
      products:[],
      videos:[]
    };
  },
  computed: mapGetters(["allProducts"]),
  created(){
      this.getProducts()
  },
  methods:{
      ...mapActions(["getProducts"]),
      async getProducts(){
          await axios.get('http://localhost:3333/products')
            .then(res => this.products = res.data)
            .then(console.log(this.products))
            .catch(err => {
                console.log(err)
            })
            setTimeout(() => {
                this.videos = null
            }, 1000);
      },
      async getHousetools(){
           await axios.get('http://localhost:3333/videos')
            .then(res => this.videos = res.data)
            .then(console.log(this.videos))
            .catch(err => {
                console.log(err)
            })
            setTimeout(() => {
                this.products = null
            }, 1000);
      }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.shop-header{
    display: flex;
    align-content: center;
    justify-content: space-between;
    height: 40px;
}
.product img{
    height: 220px;
    width:180px;
    padding:30px;
}
.product{
    padding:20px;
    flex:1;
    margin:10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.5);
    position: relative;
}
.products{
    display: flex;
    flex-wrap: wrap;
}
.show-products{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.actUser{
    display: flex;
    align-items: center;
    bottom: 0;
    padding-top:10px;
    position: absolute;
    padding-bottom: 10px;
}
.img-product{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>