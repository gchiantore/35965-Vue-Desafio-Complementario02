import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaProductos: []
  },
  getters: {
    obtenerProductos(state) {
      return state.listaProductos;
    }
  },
  mutations: {
    cargarProductos(state, productos) {
      state.listaProductos = productos;
    }
  },
  actions: {
    getApi: async function ({ commit }) {
      const data = await fetch("https://639e8f4e3542a261305d989b.mockapi.io/prod");
      const productosApi = await data.json();
      commit('cargarProductos', productosApi)
      },

    postApi: async function ({ commit }, producto) {
        const nuevoProducto=producto
        const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/prod"
        const response = await fetch(URLPOST,{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(nuevoProducto)
        })
        const respuestaPost = response.json();
        commit('cargarProductos', respuestaPost.Object)
    },
  }
})
