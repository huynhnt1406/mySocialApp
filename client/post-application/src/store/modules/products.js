import axios from 'axios'


const state= {
    products:[]
}


const getters = {
    allProducts : state => state.products
}

const actions = {
    async getProducts({commit}){
        const res = await axios.get('http://localhost:3333/products')
        console.log(res.data)
        commit('setProducts',res.data)
    }
}

const mutations = {
    setProducts : (state,products) => state.products = products
}

export default {
    state,getters,actions, mutations
}