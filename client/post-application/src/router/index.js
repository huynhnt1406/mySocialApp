import Vue from 'vue'
import VueRouter from 'vue-router'
import AllPosts from '../components/AllPosts'
import CreatePost from '../components/CreatePost'
import DetailPost from '../components/DetailPost'
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
    },
    {
        path:'/posts/:id',
        name:'DetailPost',
        component:DetailPost,
        props:true
    }
]
Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})