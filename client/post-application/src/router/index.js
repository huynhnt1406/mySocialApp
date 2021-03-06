import Vue from 'vue'
import VueRouter from 'vue-router'
import AllPosts from '../components/AllPosts'
import CreatePost from '../components/CreatePost'
import DetailPost from '../components/DetailPost'
import CreateUser from '../components/CreateUser'
import SignUp from '../components/SignUp'
import UploadVideo from '../components/UploadVideo'
import AllVideos from '../components/AllVideos'
import Shop from '../components/Shop'
import DetailProduct from '../components/DetailProduct'
import Sale from '../components/Sale'
import YourPackage from '../components/YourPackage'
const routes = [
    {
        path:'/',
        name:'AllPosts',
        component:AllPosts
    },
    {
        path:'/videos',
        name:'AllVideos',
        component:AllVideos,
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
        path:'/saleproduct',
        name:'Sale',
        component:Sale
    },
    {
        path:'/your-shopping-cart',
        name:'YourPackage',
        component:YourPackage
    },
    {
        path:'/login',
        name:'SignUp',
        component:SignUp
    },
    {
        path:'/posts/:id',
        name:'DetailPost',
        component:DetailPost,
        props:true
    },
    {
        path:'/products/:id',
        name:'DetailProduct',
        component:DetailProduct,
        props:true
    },
    {
        path:'/upload',
        name:'UploadVideo',
        component:UploadVideo,
    },
    {
        path:'/shop',
        name:'Shop',
        component:Shop,
    }
]
Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})