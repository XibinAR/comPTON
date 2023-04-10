import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error:false,
    loaded:false,
    symbol:'AAPL',
    stocklabels:[],
    technicallabels:[],
    percent:0.0,
    percentchange:0.0,
    open:{
      status:0,
      data:[]
    },
    close:{
      status:0,
      data:[]
    },
    high:{
      status:0,
      data:[]
    },
    low:{
      status:0,
      data:[]
    },
    volume:{
      status:0,
      data:[]
    },
    ema:{
      status:0,
      data:[]
    },
    sma:{
      status:0,
      data:[]
    }
  },
  getters:{
    quoteTable(state){
      let data = []
      let counter = 0
      state.stocklabels.forEach(element => {
        let obj = {datetime:element,