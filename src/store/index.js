import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: {vainilla:32, chocolate:34, leche:32},
    toppings: {MilkyWay:27, SalsaKinder:10, Snickers:20, Brownies:23, MandMs: 10},
    pedidos: [
      {
        Nombre:"Jorgito Arevalo",	
        Telefono:"3322115588",	
        Email:"jorgitoarevalo@gmail.com",	
        Descripcion:"Pastel con forma de cabeza de Shrek",	
        Sabor:"Chocolate extreme",	
        Toppings:["M&Ms","Snickers"]
      },
    ]
  },
  getters: {
    cantidadVainilla(state) {
      return state.sabores.vainilla;
    },
    cantidadChocolate(state) {
      return state.sabores.chocolate;
    },
    cantidadLeche(state) {
      return state.sabores.leche;
    },
    cantidadMilkyWay(state) {
      return state.toppings.MilkyWay;
    },
    cantidadSalsaKinder(state) {
      return state.toppings.SalsaKinder;
    },
    cantidadSnickers(state) {
      return state.toppings.Snickers;
    },
    cantidadBrownies(state) {
      return state.toppings.Brownies;
    },
    cantidadMandMs(state){
      return state.toppings.MandMs;
    },
    getPedidos(state){
      console.log(state.pedidos);
      return state.pedidos;
    }
  },
  mutations: {
    guardarPedido(state,pedido){
      state.pedidos.push(pedido);
    }
    
  },
  actions: {
    crearPedido(pedido) { 
      this.commit("guardarPedido", pedido);
    },
  },
  modules: {
  }
})
