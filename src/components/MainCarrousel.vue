<template>
  <v-carousel
      :show-arrows="false"
      cycle
      height="67rem"
      hide-delimiters
      light
  >
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item"
    >
      <v-row
          align="center"
          class="fill-height"
          justify="center"
          style="background: rgba(23, 18, 25,0.5);"
      >
        <v-layout align-start class="naturalius-main" fluid justify-center>
          <v-row class="pb-16 px-2" no-gutters>
            <v-col class="text-center pb-2" cols="12">
              <p id="title" class="font-weight-bold white--text">Taking nature to the next level</p>
            </v-col>
            <v-col class="text-center pb-15" cols="12">
              <p id="subtitle" class="white--text">We make use of biotechnology to produce innovative compounds</p>
            </v-col>
            <v-col class="text-center" cols="12">
              <v-btn id="button" elevation="2" href="mailto:contact@naturalius.com.co" rounded text x-large>
                <span class="white--text">Contact us</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-layout>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue'
import DHFR from '@/assets/videos/DHFR.gif'
import GARFT from '@/assets/videos/GARFT.gif'
import TS from '@/assets/videos/TS.gif'

export default Vue.extend({
  name: "MainCarrousel",

  data() {
    return {
      items: [
        DHFR,
        GARFT,
        TS
      ],
    }
  },
})
</script>

<style scoped lang="scss">
.naturalius {
  &-main {
    padding: 20% 0 20% 0;
  }
}

#title {
  font-size: 3.2rem;
  position: relative;
}

#subtitle {
  font-size: 1.5rem;
  position: relative;
}

#button {
  background-color: #155977
}

@media only screen and (max-width: 400px) and (max-device-width: 400px) {
  .naturalius {
    &-main {
      padding: 30% 3% 35% 3%;
    }
  }
}
</style>
