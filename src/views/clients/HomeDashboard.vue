<template>
  <v-app>
    <v-card>
        <v-toolbar
            color="#1C769D"
            height="100rem"
            dark
            flat
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
          class="accent-4"
          dark
          style="background-color: #1C769D"
          temporary
      >
        <v-list>
          <v-list-item
              v-for="item in topBarItems"
              :key="item.title"
              link
          >
            <v-list-item-icon>
              <v-icon>mdi-lock</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Configuration</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <div class="mt-16 ml-16 mb-16">
        <h1 class="text-h3 font-weight-bold">
          Welcome again Casa Luker!
        </h1>
      </div>

      <v-card
          class="my-16 mx-auto"
          width="800"
      >
        <v-sheet
            class="v-sheet--offset mx-auto"
            color="#1C769D"
            elevation="12"
        >
          <v-sparkline
              :labels="labels"
              :value="value"
              color="white"
              line-width="2"
              padding="16"
          ></v-sparkline>
        </v-sheet>

        <v-card-text class="pt-0">
          <div class="text-h6 font-weight-light mb-2">
            Biochemtion Data
          </div>
          <div class="subheading font-weight-light grey--text">
            Last ML Analysis Results
          </div>
          <v-divider class="my-2"></v-divider>
          <v-icon
              class="mr-2"
              small
          >
            mdi-clock
          </v-icon>
          <span class="text-caption grey--text font-weight-light">last container running 26 minutes ago</span>
        </v-card-text>
      </v-card>

      <div class="mt-16 mr-16 ml-16 mb-16">
        <h1 class="text-h4 font-weight-bold">
          Your progress
        </h1>
      </div>

      <v-container style="width: 500px; height: 200px">
        <v-sparkline
            :fill="fill"
            :gradient="selectedGradient"
            :line-width="width"
            :padding="padding"
            :smooth="radius || false"
            :value="value"
            auto-draw
        ></v-sparkline>
      </v-container>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default Vue.extend({
  name: "HomeDashboard",

  data: () => ({
    fill: true,
    drawer: false,
    selectedGradient: gradients[4],
    gradients,
    padding: 2,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 5,
    labels: [
      '12am',
      '3am',
      '6am',
      '9am',
      '12pm',
      '3pm',
      '6pm',
      '9pm',
    ],
    tab: null,
    topBarItems: [
      {
        name: 'Home',
        text: 'Your last activity reports at a glance',
      },
      {
        name: 'Single Search',
        text: 'Search microorganisms using a 16S ribosomal RNA sequence',
      },
      {
        name: 'Search by group',
        text: 'See your generated groups and clasifications, for manually searching a element',
      },
    ],
  }),
})
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
