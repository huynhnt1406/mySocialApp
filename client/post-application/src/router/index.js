import Vue from 'vue'
import VueRouter from 'vue-router'
import AllPosts from '../components/AllPosts'
import CreatePost from '../components/CreatePost'
import DetailPost from '../components/DetailPost'
import CreateUser from '../components/CreateUser'
import SignUp from '../components/SignUp'
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
        path:'/signin',
        name:'CreateUser',
        component:CreateUser
    },
    {
        path:'/signup',
        name:'SignUp',
        component:SignUp
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