
<template>
  <div>
      <v-alert type="error" outlined v-if='this.$store.state.error' dismissible>
          API Error
    </v-alert>
    <v-alert type="warning" outlined v-if='!this.$store.state.loaded' dismissble>
        API Timeout
    </v-alert>
    <v-row>
        <v-col lg=4 md=4>
            <v-row>
                <v-col>
                    <v-card outlined width="175px" height="180px" dark class="blue-grey darken-1">
                        <v-card-title><span class="overline">{{this.$store.state.symbol}}</span><v-spacer/><span class="overline">Open</span></v-card-title>
                        <v-card-text class="headline">
                            $ {{this.$store.state.open.status}}
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card outlined width="175px" height="180px" dark class="blue-grey darken-1">
                        <v-card-title><span class="overline">{{this.$store.state.symbol}}</span><v-spacer/><span class="overline">High</span></v-card-title>
                        <v-card-text class="headline">
                            $ {{this.$store.state.high.status}}
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card outlined width="175px" height="180px" dark class="blue-grey darken-1">
                        <v-card-title><span class="overline">{{this.$store.state.symbol}}</span><v-spacer/><span class="overline">Low</span></v-card-title>
                        <v-card-text class="headline">
                            $ {{this.$store.state.low.status}}
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card outlined width="175px" height="180px" dark class="blue-grey darken-1">
                        <v-card-title><span class="overline">{{this.$store.state.symbol}}</span><v-spacer/><span class="overline">Close</span></v-card-title> 
                         <v-card-text class="headline">
                        $ {{this.$store.state.close.status}}
                    </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
        <v-col lg=8 md=8>
                <apexchart type=area height=440 :options="chartOptions" :series="[{name: `Price of ${this.$store.state.symbol}`,data: this.$store.state.close.data}]" v-if="this.$store.state.loaded" ref='price'/>
        </v-col>
    </v-row>
            <v-data-table
                :headers="headers"
                :items="this.$store.getters.quoteTable"
                :items-per-page="5"
                item-key="datetime"
                :footer-props="{
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus'}"
                dark
                class='blue-grey darken-1 overline'
                >
            </v-data-table>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components:{
        apexchart: VueApexCharts,
    },
    data(){
        return{
            headers: [
            {
                text: 'Datetime',
                align: 'left',
                value: 'datetime',
            },
            {   text: 'Open',
                align:'left', 
                value: 'open' 
            },
            {   text: 'High',
                align:'left', 
                value: 'high' 
            },
            {   text: 'Low',
                align:'left', 
                value: 'low' 
            },
            {   text: 'Close',
                align:'left', 
                value: 'close' 
            },
            ],
            chartOptions: {
            chart: {
                zoom: {
                enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            series: [{
                name: `Price of ${this.$store.state.symbol}`,
                data: this.$store.state.close.data
            }],
            title: {
                text: 'Time Series of Apple Stock',
                align: 'left'
            },
            subtitle: {
                text: 'Price Movements',
                align: 'left'
            },
            labels:this.$store.state.stocklabels,
            xaxis:{
                labels: {
                show: false,
                }
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
            }

    }
    },
}
</script>

<style>

</style>