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
    async deletePost({commit},id){
        await axios.delete(`http://localhost:3333/posts/delete/${id}`)
        commit('removePost', id)
    },
    async updatePost({commit}, data){
        await axios.put(`http://localhost:3333/posts/update/${data.id}`)
        commit('updatePost',data)
    },
}

const mutations = {
    setPosts : (state,posts) => state.posts = posts,
    removePost : (state,_id) => state.posts = state.posts.filter(post => post._id !== id),
    updatePost: (state,data) => {
        const index = state.posts.findIndex(post => post.id === data.id)
        if(index != -1){
            state.posts.splice(index,1, data)
        }
    }
}

export default {
    state,getters,actions, mutations
}