<template>
  <v-app>
    <v-btn
        v-show="fab"
        v-scroll="onScroll"
        bottom
        color="#1C769D"
        dark
        fab
        fixed
        right
        @click="toTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    <v-card fixed>
      <v-toolbar
          color="#1C769D"
          dark
          flat
          height="100rem"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Your Dashboard</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-slot:extension>
          <v-tabs
              v-model="tab"
              align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab
                v-for="(item, i) in topBarItems"
                :key="i"
            >
              {{ item.name }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="(item, i) in topBarItems"
            :key="i"
        >
          <v-card flat>
            <v-card-text v-text="item.text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-container>
      <v-navigation-drawer
          v-model="drawer"
          absolute
          align="center"
          class="accent-4"
          dark
          style="background-color: #1C769D"
          temporary
      >
        <v-list>
          <v-list-item
              v-for="(item, i) in sideBarItems"
              :key="i"
              link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template>
          <div class="pa-2">
            <v-btn block color="white" href="https://naturalius.com.co" light>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <div v-if="this.tab === 0">
        <div class="ma-16 mb-10">
          <div class="ma-16 mb-10">
            <h1 class="text-h4 font-weight-bold">
              Start searching relations by 16S
            </h1>
            <v-text-field
                v-model="searchedSequence"
                class="mt-10 mb-5"
                filled
                label="Paste a 16S sequence">
            </v-text-field>
            <v-btn @click="showSingleSearch">Search</v-btn>
          </div>

          <div v-if="sequenceNotFound" class="ma-16 mb-10">
            <v-alert
                dense
                type="error"
            >
              Incorrect, repeated or not found sequence
            </v-alert>
          </div>

          <div v-if="loading" class="ma-16 mb-10 pa-auto" style="height: 150px; width: 150px">
            <lottie-animation
                ref="animation"
                :animationData="require(`@/assets/lottie/searchSequence.json`)"
                :autoPlay="true"
                :loop="true"
                :speed="0.1"
            />
          </div>

          <v-container v-if="this.searched">
            <h1 class="text-h5 mt-16 font-weight-bold">
              16S sequence representation
            </h1>
            <apexchart :options="chartOptions" :series="series" height="450" type="heatmap"></apexchart>

            <h1 class="text-h5 mt-16 font-weight-bold">
              Result details
            </h1>
            <v-card v-for="(organism, i) in this.organismData" :key="i" class="pa-16 ma-16">
              <v-row>
                <v-col cols="4">
                  <h1 class="text-h4 pb-6">
                    {{ organism.organismName }}
                  </h1>
                  <v-tooltip max-width="350px" right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-img v-bind="attrs"
                             v-on="on"
                             :eager="true" :src="require(`@/assets/mock/images/organism/${organism.organismImage}`)"
                             aspect-ratio="1"
                             max-height="300"
                             max-width="300"></v-img>
                    </template>
                    <span>Sphingobium species differ from other sphingomonas in that they are usually isolated from the soil; however, Sphingobium yanoikuyae was isolated from a clinical sample. They can degrade a variety of chemicals in the environment, such as aromatic and chloroaromatic compounds, phenols such as nonylphenol and pentachlorophenol, herbicides such as (RS) -2- (4-chloro-2-methylphenoxy) propionic acid and hexachlorocyclohexane, and polycyclic aromatic hydrocarbons.
The SYK-6 strain of Sphingobium sp. It is capable of growing on a wide variety of lignin-derived biaryls and monoaryls, and the catabolic genes for these compounds are useful for the production of industrially valuable metabolites from lignin. (https://www.nite.go.jp/en/nbrc/genome/project/annotation/ss1.html)</span>
                  </v-tooltip>
                </v-col>
                <v-col cols="4">
                  <h1 class="text-h6 pb-6">
                    {{ organism.compoundName }}
                  </h1>
                  <p class="">
                    <span class="font-weight-bold">Compound type:</span> {{ organism.compoundType }}
                  </p>
                  <v-tooltip max-width="350px" right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-img v-bind="attrs"
                             v-on="on"
                             :eager="true" :src="require(`@/assets/mock/images/compound/${organism.compoundImage}`)"
                             max-height="300"
                             max-width="300"></v-img>
                    </template>
                    <span>Aldehydes are substances of the general formula RC'HO: ketones are compounds of general formula RR'CO. The R and R 'groups can be aliphatic or aromatic. (At aldehyde. DONE. R is H. Aldehydes and ketones contain the carbonite group. C = 0. and I often collectively called carbonyl compounds. The carbomyl group is the one that determines in measure the chemistry of aldehydes and ketones Not surprisingly, aldehydes and ketones are similar in most of their properties. However, the carbonyl group of aldehydes also contains a hydrogen, while ketones have two organic groups. This structural difference affects their properties in two ways: (a) aldehydes are easily oxidized: ketones they only do it with difficulty (b) aldehydes tend to be more reactive than ketones in adi neleophilic tions. reactions these last characteristics of carbonyl compounds.</span>
                  </v-tooltip>
                </v-col>
                <v-col class="mt-16" cols="4">
                  <p class="">
                    <span class="font-weight-bold">Compound group:</span> {{ organism.compoundGroup }}
                  </p>
                  <p class="">
                    <span class="font-weight-bold">Characteristic:</span> {{ organism.characteristic }}
                  </p>
                  <v-img :eager="true"
                         :src="require(`@/assets/mock/images/characteristic/${organism.characteristicImage}`)"
                         max-height="400" max-width="300"></v-img>
                </v-col>
              </v-row>
            </v-card>

            <v-row class="mt-16" style="width: 100%; text-align: center">
              <v-col>
                <v-btn color="#1C769D" dark width="500" @click="saveSession">Save session on reports</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>

      <div v-if="this.tab === 1">
        <div class="ma-16 mb-10">
          <h1 class="text-h4 font-weight-bold">
            Past reports
          </h1>
          <v-card
              v-for="i in [0,1,2,3,4,5,6].reverse()"
              :key="i"
              class="mx-auto mt-10 pa-3"
              outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  09/16/21
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Report 00{{ i }}
                </v-list-item-title>
                <v-list-item-subtitle>No description provided.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn
                  color="#1C769D"
                  elevation="1"
                  outlined
              >
                See online results
              </v-btn>
              <v-btn
                  elevation="1"
                  outlined
              >
                Download PDF report
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import VueApexCharts from 'vue-apexcharts'
import kmersJson from '@/assets/mock/data/HeatMap1.json'
import organismJson from '@/assets/mock/data/organismResults.json'
import LottieAnimation from 'lottie-web-vue';

Vue.use(LottieAnimation)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default Vue.extend({
  name: "HomeDashboard",

  components: {
    LottieAnimation
  },
  data: () => ({
    tab: null,
    fab: false,
    drawer: false,
    searched: false,
    searchedSequence: '',
    loading: false,
    sequenceNotFound: false,
    topBarItems: [
      {
        name: 'Search',
        text: 'Search microorganisms using a 16S ribosomal RNA sequence and then create a report.',
      },
      {
        name: 'Reports History',
        text: 'Download your past reports.',
      },
    ],
    sideBarItems: [
      {
        text: 'Home',
        icon: 'mdi-home',
      },
      {
        text: 'Appointments',
        icon: 'mdi-seat',
      },
      {
        text: 'Configuration',
        icon: 'mdi-tune',
      },
      {
        text: 'Account Balance',
        icon: 'mdi-account',
      },
      {
        text: 'Support',
        icon: 'mdi-help',
      },
    ],
    json: {},
    completeOrganismData: [{
      "organismName": "MO_NAME",
      "organismImage": "cocoa.jpeg",
      "compoundGroup": "CMP_GROUP",
      "compoundName": "CMP_NAME",
      "compoundImage": "cocoa.jpeg",
      "characteristic": "REPLACE",
      "characteristicImage": "",
      "compoundType": "GOOD",
      "sequence": ""
    }],
    organismData: [{
      "organismName": "MO_NAME",
      "organismImage": "cocoa.jpeg",
      "compoundGroup": "CMP_GROUP",
      "compoundName": "CMP_NAME",
      "compoundImage": "cocoa.jpeg",
      "characteristic": "REPLACE",
      "characteristicImage": "",
      "compoundType": "GOOD",
      "sequence": ""
    }],
    completeDataSeries: [{name: 'n', data: [{x: '', y: 0}]}],
    series: [{name: 'n', data: [{x: '', y: 0}]}],
    chartOptions: {
      legend: {
        position: 'bottom',
        horizontalAlign: 'right',
        onItemHover: {
          toggleDataSeries: true
        },
      },
      chart: {
        height: 1000,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        padding: {
          right: 50,
          left: 30
        },
      },
      xaxis: {
        title: 's',
        type: 'category',
        categories: ['10', '20', '30', '40', '50', '60']
      },
      plotOptions: {
        heatmap: {
          colorScale: {
            ranges: [
              {
                from: -100,
                to: 9,
                color: '#482979',
                name: '10',
              },
              {
                from: 10,
                to: 19,
                color: '#39558C',
                name: '20',
              },
              {
                from: 20,
                to: 29,
                color: '#297A8E',
                name: '30',
              },
              {
                from: 30,
                to: 39,
                color: '#1E9D89',
                name: '40',
              },
              {
                from: 40,
                to: 49,
                color: '#42BE70',
                name: '50',
              },
              {
                from: 50,
                to: 59,
                color: '#60CA60',
                name: '60',
              },
              {
                from: 60,
                to: 100,
                color: '#FBE524',
                name: '70',
              },
            ]
          },
          distriduted: true,
          radius: 0
        }
      },
    }
  }),
  methods: {
    onScroll(e: { target: { scrollTop: never; }; }) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
    generateDataSeries() {
      let json = kmersJson
      for (let j = 0; j < json.length; j++) {
        let obj = JSON.parse(JSON.stringify(json[j]))
        let keys: string[] = Object.keys(obj)

        let kmers = []
        for (let k = 1; k < keys.length; k++) {
          let label = keys[k]
          let kmer = {
            x: label,
            y: obj[label]
          }
          kmers.push(kmer)
        }

        this.completeDataSeries.push({
          name: obj.Organism,
          data: kmers
        })
      }
    },
    generateDataDescriptions() {
      let json = organismJson
      for (let j = 0; j < json.length; j++) {
        let obj = JSON.parse(JSON.stringify(json[j]))
        this.completeOrganismData.push(obj)
      }
    },
    async showSingleSearch() {
      this.loading = true
      let sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms))
      await sleep(Math.floor(Math.random() * (3000 - 1000 + 1) + 1000))
      this.loading = false

      // Description
      let organismDescription = this.completeOrganismData.filter(e => e.sequence == this.searchedSequence)[0]
      if (organismDescription == undefined) {
        this.sequenceNotFound = true
        await sleep(4000)
        this.sequenceNotFound = false
        return
      }
      this.completeOrganismData = this.completeOrganismData.filter(item => item !== organismDescription)
      this.organismData.push(organismDescription)

      // Heatmap
      let heatmap: any = this.completeDataSeries.filter(e => e.name == organismDescription.organismName)[0]
      this.completeDataSeries = this.completeDataSeries.filter(item => item !== heatmap)
      this.series.push(heatmap)

      this.searched = true
      this.sequenceNotFound = false
    },
    saveSession() {
      this.$router.go(0)
    }
  },
  beforeMount() {
    this.generateDataSeries()
    this.generateDataDescriptions()
    this.series.shift()
    this.completeDataSeries.shift()
    this.organismData.shift()
    this.completeOrganismData.shift()
  }
})
</script>

<style scoped>
</style>
