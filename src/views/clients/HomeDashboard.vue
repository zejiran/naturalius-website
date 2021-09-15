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
                v-for="item in topBarItems"
                :key="item"
            >
              {{ item.name }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="item in topBarItems"
            :key="item"
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
              v-for="item in sideBarItems"
              :key="item.title"
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
        <div class="my-16 ml-16">
          <h1 class="text-h3 font-weight-bold mb-16">
            Welcome again Casa Luker!
          </h1>
        </div>

        <div class="ma-16 mb-10">
          <h1 class="text-h4 font-weight-bold">
            Your last report results
          </h1>
          <p class="text--lighten-2 mt-3">This report identified with the RCL035 ID was obtained on 09/18/21</p>
          <h1 class="text-h5 mt-16 font-weight-bold">
            16S sequence representation
          </h1>
        </div>
        <apexchart :options="chartOptions" :series="series" height="450" type="heatmap"></apexchart>
      </div>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default Vue.extend({
  name: "HomeDashboard",

  data: () => ({
    tab: null,
    fab: false,
    drawer: false,
    topBarItems: [
      {
        name: 'Home',
        text: 'Your last activity reports at a glance.',
      },
      {
        name: 'Single Search',
        text: 'Search microorganisms using a 16S ribosomal RNA sequence.',
      },
      {
        name: 'Search by group',
        text: 'See your generated groups and clasifications, for manually searching a element.',
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

    series: [{name: 's', data: [{x: '', y: 0}]}],
    chartOptions: {
      chart: {
        height: 4000,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        padding: {
          right: 100,
          left: 70
        }
      }
    },
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
    generateDataSeries(name: string) {
      let kmers = []
      for (let i = 1; i < 65; i++) {
        let kmer = {
          x: 'K' + i,
          y: this.getRandomArbitrary(20, 101)
        }
        kmers.push(kmer)
      }

      let row = {
        name: name,
        data: kmers
      }

      this.series.push(row)
    },
    getRandomArbitrary(min: number, max: number) {
      return Math.floor(Math.random() * (max - min) + min)
    }
  },
  mounted() {
    this.generateDataSeries('Sphingobium sp. SYK-6')
    this.generateDataSeries('Salmonella enterica')
    this.generateDataSeries('Geobacillus stearothermophilus')
    this.generateDataSeries('Corynebacterium glutamicum')
    this.generateDataSeries('Cupriavidus pinatubonensis')
    this.generateDataSeries('Lactococcus lactis')
    this.generateDataSeries('Dickeya dadantii')
    this.generateDataSeries('Teredinibacter turnerae')
    this.generateDataSeries('Acinetobacter sp. YAA')
    this.generateDataSeries('Desulfovibrio alaskensis')
    this.series.shift()
  }
})
</script>

<style scoped>
</style>
