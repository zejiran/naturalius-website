<template>
  <v-carousel
      cycle
      height="67rem"
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
          style="background: rgba(23, 18, 25, 0.38);"
      >
        <v-layout align-start class="naturalius-main px-5 pl-md-15 pl-xl-16" fluid justify-center>
          <v-row class="pb-16 px-2 pl-xl-16" no-gutters>
            <v-col class="pb-2" cols="12">
              <p id="title" class="font-weight-bold white--text text-md-justify text-center">Taking nature to
                the next level</p>
            </v-col>
            <v-col class="pb-15" cols="12">
              <p id="subtitle" class="white--text text-md-justify text-center">We make use of biotechnology to
                produce innovative compounds</p>
            </v-col>
            <v-col class="text-md-justify text-center" cols="12">
              <v-btn id="button" elevation="2" href="mailto:contact@naturalius.com.co" text x-large>
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

<style lang="scss" scoped>
.naturalius {
  &-main {
    padding: 20% 0 20% 0;
  }
}

#title {
  font-size: 5rem;
}

#subtitle {
  font-size: 2rem;
}

#button {
  background-color: #1C769D;
}

@media only screen and (max-width: 768px) and (max-device-width: 768px) {
  #title {
    font-size: 3.8rem;
  }

  #subtitle {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 400px) and (max-device-width: 400px) {
  .naturalius {
    &-main {
      padding: 30% 3% 35% 3%;
    }
  }

  #title {
    font-size: 3.3rem;
  }
}
</style>
