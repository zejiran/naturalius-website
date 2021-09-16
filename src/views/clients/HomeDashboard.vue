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
        <div class="ma-16 mb-10">
          <div class="ma-16 mb-10">
            <h1 class="text-h4 font-weight-bold">
              Start searching relations by 16S
            </h1>
            <v-text-field
                class="mt-10 mb-5"
                filled
                label="Paste a 16S sequence">
            </v-text-field>
            <v-btn @click="showSingleSearch">Search</v-btn>
          </div>

          <v-container v-if="this.searched">
            <h1 class="text-h5 mt-16 font-weight-bold">
              16S sequence representation
            </h1>
            <apexchart :options="chartOptions" :series="series" height="450" type="heatmap"></apexchart>

            <h1 class="text-h5 mt-16 font-weight-bold">
              Result details
            </h1>
            <v-card v-for="organism in this.organismData" :key="organism" class="pa-16 ma-16">
              <v-row>
                <v-col cols="4">
                  <h1 class="text-h4 pb-6">
                    {{ organism.organismName }}
                  </h1>
                  <v-img :src="require(`@/assets/mock/images/organism/${organism.organismImage}`)"
                         aspect-ratio="1" max-height="300" max-width="300"></v-img>
                </v-col>
                <v-col cols="4">
                  <h1 class="text-h6 pb-6">
                    {{ organism.compoundName }}
                  </h1>
                  <p class="">
                    <span class="font-weight-bold">Compound type:</span> {{ organism.compoundType }}
                  </p>
                  <v-img :src="require(`@/assets/mock/images/compound/${organism.compoundImage}`)"
                         max-height="300" max-width="300"></v-img>
                </v-col>
                <v-col class="mt-16" cols="4">
                  <p class="">
                    <span class="font-weight-bold">Compound group:</span> {{ organism.compoundGroup }}
                  </p>
                  <p class="">
                    <span class="font-weight-bold">Characteristic:</span> {{ organism.characteristic }}
                  </p>
                  <v-img :src="require(`@/assets/mock/images/characteristic/${organism.characteristicImage}`)"
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
          <p class="text--lighten-2 mt-3"></p>

          <h1 class="text-h5 mt-16 font-weight-bold">
            Alcohols
          </h1>
          <p>
            If an organic chemist were allowed to choose 10 aliphatic compounds to stay
            left on a desert island he would almost certainly choose alcohols. With them I could
            make practically all other types of aliphatic compounds: alkyl halides.
            alkenes, ethers, aldehydes, ectones. acids, esters and many others. With halides of
            alkyl would get Grignard reagents and. by reacting these with aldehydes and
            celonas, would get more complex alcohols, and so on. On your desert island
            I would use his alcohols not only as raw materials, but also as solvents for
            to carry out reactions and to crystallize products. Finally tired after a
            long day's work in the lab, he could rub himself off with an alcohol
            (isopropyl) and relax with a refreshing alcoholic drink (ethanol).
          </p>
          <p>
            Alcohols are compounds of the general formula ROH. where R is any alkyl group,
            even replaced. The group can be primary, secondary or tertiary; can be chain
            open or cyclical; may contain a double bond, a halogen atom, an aromatic ring
            or additional hydroxyl groups.
            All alcohols contain the hydrophilic group (—OH), which being its group
            Functional determines the characteristic properties of this family. Variations in
            structure of the R group can affect the rate of certain reactions of alcohol and
            even affect, in some cases, the type of reaction.
          </p>

          <h1 class="text-h5 mt-16 font-weight-bold">
            Phenols
          </h1>
          <p>
            Compounds with a hydroxyl group directly attached to an aromatic ring and not
            they are alcohols, but rather phenols, which differ so markedly from the former. Phenols are compounds of
            the general formula ArOH, where Ar is phenyl, substituted phenyl, or one of the other aryl groups. Phenols
            are generally named as derivatives of the simplest member of the
            family, phenol. Methylphenols are given the special name of cresols. Phenols are quite acidic compounds, and
            aqueous hydroxides make phenols in their salts. Coal tar produces a certain amount of phenol and also
            cresols. The most important amount, however, is synthetic. Phenol ranks high on the list of synthetic
            aromatic compounds; It is mainly used in the manufacture of phenol-formaldehyde polymers
          </p>

          <h1 class="text-h5 mt-16 font-weight-bold">
            Aldehydes and Ketones
          </h1>
          <p>
            Aldehydes are substances of the general formula RC'HO: ketones are compounds of
            general formula RR'CO. The R and R 'groups can be aliphatic or aromatic. (At
            aldehyde. DONE. R is H.
            Aldehydes and ketones contain the carbonite group. C = 0. and I often
            collectively called carbonyl compounds. The carbomyl group is the one that determines in
            measure the chemistry of aldehydes and ketones
            Not surprisingly, aldehydes and ketones are similar in most of their
            properties. However, the carbonyl group of aldehydes also contains a
            hydrogen, while ketones have two organic groups. This structural difference
            affects their properties in two ways: (a) aldehydes are easily oxidized: ketones
            they only do it with difficulty (b) aldehydes tend to be more reactive than ketones in adi
            neleophilic tions. reactions these last characteristics of carbonyl compounds.
          </p>

          <h1 class="text-h5 mt-16 font-weight-bold">
            Esters
          </h1>
          <p>
            They are derived from carboxylic acids and their structure is RCOOR 'with a carbonyl group (C = O). The
            limit solubility in water is three to five carbons. The more volatile esters have pleasant and very
            characteristic odors, which is why they are often used in the preparation of perfumes and artificial
            condiments.
          </p>

          <h1 class="text-h5 mt-16 font-weight-bold">
            Amines, Purines and Nitriles
          </h1>
          <p>
            Amines are organic substances that show appreciable basicity as they can cause litmus paper to turn. Amines
            have the general formula RNH2. R2NH or RjN, where R is an alkyl or aryl group. Simply put Amines are simply
            ammonia with one or more hydrogens replaced by organic groups.
            Some of the simplest and most important amines are prepared on an industrial scale by
            processes that have no application as laboratory methods.
            The most important amine of all, aniline, is prepared in several ways one of them is by
            reduction of nitrobenzene with iron and hydrochloric acid, which are cheap reagents.
            A very important type of compound spirit is one where nitrogen is part of a
            ring. Since a ring of these characteristics contains more than one type of atom
            (nitrogen plus the usual carbon). the compound of which it forms part is said to be
            heterocycle. These heterocyclic amines can be saturated or not. aliphatic or aromatic; a
            Nitrogen shares the ring with another or with a heteroatom such as oxygen or sulfur. Some examples of these
            compounds are: pyrrole, pyridine, purine among many more.
            Something to keep in mind as an important aspect is that, whether it is part of a ring or not, the
            nitrogen is still nitrogen. It retains its most important property, its basicity. This property that
            determines the chemical behavior of amines.
            We have all heard of bases, the sequence of which throughout the DNA molecule constitutes the
            genetic code. These are heterocyclic bases and their basicity is due to nitrogen.
            Nitriles are compounds that have the structure RC = N and are referred to as cyano-compound cyanides,
            generally they receive the name of the acids that they generate by hydrolysis. They are named by removing
            the word acid and changing the ico ending from the acid's common name to nitrile; for euphony, an "o" would
            normally be inserted between the stem and the ending, for example, acetonitrile.
          </p>

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

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default Vue.extend({
  name: "HomeDashboard",

  data: () => ({
    tab: null,
    fab: false,
    drawer: false,
    searched: false,
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
      "organismImage": "./../../assets/images/cocoa.jpeg",
      "compoundGroup": "CMP_GROUP",
      "compoundName": "CMP_NAME",
      "compoundImage": "@/assets/mock/images/compound/",
      "characteristic": "REPLACE",
      "characteristicImage": "",
      "compoundType": "GOOD"
    }],
    organismData: [{
      "organismName": "MO_NAME",
      "organismImage": "./../../assets/images/cocoa.jpeg",
      "compoundGroup": "CMP_GROUP",
      "compoundName": "CMP_NAME",
      "compoundImage": "@/assets/mock/images/compound/",
      "characteristic": "REPLACE",
      "characteristicImage": "",
      "compoundType": "GOOD"
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
    showSingleSearch() {
      this.searched = true

      // Heatmap
      let element: any = this.completeDataSeries.shift()
      this.series.push(element)

      // Description
      let organism: any = this.completeOrganismData.shift()
      this.organismData.push(organism)
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
