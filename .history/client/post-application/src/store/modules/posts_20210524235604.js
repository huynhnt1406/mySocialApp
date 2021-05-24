import axios from 'axios'


const uri = 'http://localhost:3333/posts'

const state = {
    posts: []
}
const getters = {
    allPosts : (state) => state.posts
}

const actions = {
    async getPosts({commit}){
        const res = await axios.get(`${uri}`)
        console.log(res.data)
        commit('setPosts', res.data)
    }
}

const mutations = {
    setPosts : (state,posts) => state.posts = posts
}

export default {
    state,getters,actions, mutations
}