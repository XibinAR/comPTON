<template>
  <div>
        <v-alert type="error" outlined v-if='this.$store.state.error' dismissible>
          API Error
    </v-alert>
    <v-alert type="warning" outlined v-if='!this.$store.state.loaded' dismissble>
        API Timeout
    </v-alert>
    <v-row>
        <v-col>
            <v-card outlined class="blue-grey darken-1" dark>
                 <v-card-title><span class="overline">{{this.$store.state.symbol}}</span><v-spacer/><span class="overline">Volume</span></v-card-title>
                <v-card-text class="headline">
                    {{this.$store.state.volume.status}}
                </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card outlined class="blue-grey darken-1" dark> 
                <v-card-title><span class="overline">{{this.$store.state.symbol}}</span><v-spacer/><span class="overline">Percent</span></v-card-title>
                <v-card-text class="headline">
                    {{this.$store.state.percent}}
                </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card outlined class="blue-grey darken-1" dark>
                    <v-card-title><span class="overline">{{this.$store.state.symbol}}</span><v-spacer/><span class="overline">SMA</span></v-card-title>
                <v-card-text class="headline">
                    {{this.$store.state.sma.status}}
                </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card outlined class="blue-grey darken-1" dark>
                    <v-card-title><span class="overline">{{this.$store.state.symbol}}</span><v-spacer/><span class="overline">EMA</span></v-card-title>
                <v-card-text class="headline">
                    {{this.$store.state.ema.status}}
 