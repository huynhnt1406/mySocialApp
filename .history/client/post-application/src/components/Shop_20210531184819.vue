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
                    <router-link class="link" :to="{name:'DetailProduct', params:{id:product._id}}"> <b-button variant="success">Detail</b-button> </router-link>
                    <b-button variant="outline-primary">Add To Cart</b-button>
                </div>
            </div>
        </div>
    </div>
     <div class="show-videos">
        <div class="products">
          <div v-for="tool in household" :key="tool._id" class="product">
                <small>{{tool.title}}</small>
                <p>{{tool.price}} đ</p>
                <div class="img-product">
                    <img :src="tool.productImgChild[0]" :alt="tool._id"/>
                </div>
                <div class="actUser">
                    <router-link class="link" :to="{name:'DetailProduct', params:{id:tool._id}}"> <b-button variant="success">Detail</b-button> </router-link>
                    <b-button variant="outline-primary">Add To Cart</b-button>
                </div>
            </div>
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
      household:[]
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
                this.household = null
            }, 500);
      },
      async getHousetools(){
           await axios.get('http://localhost:3333/household')
            .then(res => this.household = res.data)
            .then(console.log(this.household))
            .catch(err => {
                console.log(err)
            })
            setTimeout(() => {
                this.products = null
            }, 500);
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
    height: 250px;
    width:250px;
}
.product{
    flex:1;
    margin:10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.5);
    position: relative;
    height: 400px;
    padding:10px;
    flex-direction: column;
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
.link{
    margin-left:5px;
}
</style>