import Vue from 'vue'
import VueRouter from 'vue-router'
import AllPosts from '../components/AllPosts'
import CreatePost from '../components/CreatePost'
const routes = [
    {
        path:'/',
        name:'AllPosts',
        component:AllPosts
    },
    {
        path:'/create',
        name:'CreatePost',
        component:CreatePost
    }
]
Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})