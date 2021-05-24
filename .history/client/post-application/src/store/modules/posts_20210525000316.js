import axios from 'axios'
const state = {
    posts: []
}
const getters = {
    allPosts : (state) => state.posts
}

const actions = {
    async getPosts({commit}){
        const res = await axios.get('http://localhost:3333/posts')
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