import axios from 'axios'


const state = {
    videos:[]
}

const getters = {
    allVideos : state => state.videos
}

const actions = {
    async getVideos({commit}){
        const res = await axios.get('http://localhost:3333/videos')
        console.log(res.data)
        commit('setVideos', res.data)
    }
}

const mutations = {
    setVideos: (state, videos) => state.videos = videos
}

export default {
    state, getters, actions, mutations
}