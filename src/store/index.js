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
        let obj = {datetime:element,open:state.open.data[counter],high:state.high.data[counter],low:state.low.data[counter],close:state.close.data[counter]}
        data.push(obj)
        counter++
      })
      return data
    },
    volumeTable(state){
      let data = []
      let counter = 0
      state.stocklabels.forEach(element => {
        let obj = {datetime:element,volume:state.volume.data[counter]}
        data.push(obj)
        counter++
      })
      return data
    }
  },
  mutations: {
    setQuotes(state,quotes){
      state.open.status = quotes.open
      state.high.status = quotes.high
      state.low.status = quotes.low
      state.close.status = quotes.close
      state.volume.status = quotes.volume
      state.percent = quotes.percent
      state.percentchange = quotes.percentchange
    },
    setSeries(state,datasets){
      state.stocklabels = datasets.labels
      state.open.data = datasets.open
      state.close.data = datasets.close
      state.high.data = datasets.high
      state.low.data = datasets.low
      state.volume.data = datasets.volume
    },
    setTechnical(state,datasets){
      state.technicallabels = datasets.labels
      state.ema.data = datasets.ema
      state.ema.status