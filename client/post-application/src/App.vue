<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <h3 style="color:white">mySocial <a-icon type="smile" /></h3>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="dribbble-square" />
          <span><router-link class="link" to="/">New feeds</router-link></span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span><router-link class="link" to="/videos">Watch</router-link></span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="video-camera" />
          <span><router-link class="link" to="/shop">Shopping</router-link></span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span><router-link class="link" to="/myaccount">My account</router-link></span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="edit" /><span>My Activations</span></span>
          <a-menu-item key="4">
            <span><router-link class="link" to="/create">Create Post</router-link></span>
          </a-menu-item>
          <a-menu-item key="5">
            <span><router-link class="link" to="/upload">Upload Video</router-link></span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <Header/>
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '200px' }" >
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        mySocial 2021 - nthuynh
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Header from './core/Header'
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components:{
   Header
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.link{
  color:white
}
h3{
  padding:5px;
  color:white
}
</style>