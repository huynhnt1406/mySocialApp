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
    },
    async deletePost({commit},_id){
        await axios.delete(`http://localhost:3333/posts/delete/${_id}`)
        commit('removePost', _id)
    },
    async updatePost({commit}, data){
        await axios.put(`http://localhost:3333/posts/update/${data._id}`)
        console.log(data)
        commit('updatePost',data)
    }
}

const mutations = {
    setPosts : (state,posts) => state.posts = posts,
    removePost : (state,_id) => state.posts = state.posts.filter(post => post._id !== _id),
    updatePost: (state,data) => {
        const index = state.posts.findIndex(post => data._id === post._id)
        if(index != -1){
            console.log(data)
            console.log(index)
        }
    }
}

export default {
    state,getters,actions, mutations
}