<template>
  <v-carousel
      cycle
      height="67rem"
  >
    <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
    >
      <v-row
          align="center"
          justify="center"
          style="background: rgba(23, 18, 25, 0.38); height: 105%"
      >

        <video v-if="item.video" autoplay="autoplay" class="fill-height" loop="loop" muted playsinline
               style="z-index: -1; top:0;position: absolute;">
          <source :src="item.video[0]" type="video/webm">
          <source :src="item.video[1]" type="video/mp4">
        </video>
        <img v-if="item.image" :src="item.image" alt="carrousel-image" class="fill-height"
             style="z-index: -1; top: 0;position: absolute;">
        <div :style="item.background"></div>

        <v-layout align-start class="naturalius-main px-5 pl-md-15 pl-xl-16" fluid justify-center>
          <v-row class="px-2 pl-xl-16" no-gutters>
            <v-col cols="12">
              <p id="title" class="font-weight-bold white--text text-md-left text-center">{{ item.title }}</p>
            </v-col>
            <v-col class="pb-15" cols="12">
              <p id="subtitle" class="white--text text-md-left text-center">{{ item.text }}</p>
            </v-col>
            <v-col class="text-md-justify text-center" cols="12">
              <v-btn id="button" elevation="5" href="mailto:contact@naturalius.com.co" raised text x-large>
                <span class="white--text">Contact us</span>
              </v-btn>
              <v-btn id="button-2" class="ml-5 hidden-sm-and-down" elevation="2"
                     href="https://calendly.com/naturaliusbiotech/30min" raised
                     x-large>
                <span class="white--text">Request a demo</span>
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
import tech from '@/assets/images/tech-chemistry.jpeg'
import TS from '@/assets/videos/TS.webm'
import TSmp4 from '@/assets/videos/TS.mp4'
import EZ from '@/assets/videos/enzima.webm'
import EZmp4 from '@/assets/videos/enzima.mp4'

export default Vue.extend({
  name: "MainCarrousel",

  data() {
    return {
      items: {
        1: {
          'title': 'Taking biology to the next level',
          'text': 'We make use of biotechnology to produce innovative compounds, predictive models, and simulations for chemical processes of the utmost importance',
          'image': '',
          'video': [TS, TSmp4],
          'background': 'background-color: black; height: 100%; width: 100%; position:absolute; top:0; z-index: -2',
        },
        2: {
          'title': 'Harness the endless power of nature',
          'text': 'Our tremendous biodiversity represents a unique chance of taking advantage of an extraordinarily immense reservoir of molecules',
          'image': tech,
          'video': '',
          'background': 'background-color: #184154; height: 100%; width: 100%; position:absolute; top:0; z-index: -2',
        },
        3: {
          'title': 'Computation sparks chemical discovery',
          'text': 'The integration of advanced methods in the realm of chemistry and computing provide unprecedent technological advances and opportunities',
          'image': '',
          'video': [EZ, EZmp4],
          'background': 'background-color: white; height: 100%; width: 100%; position:absolute; top:0; z-index: -2',
        },
      }
    }
  },
})
</script>

<style lang="scss" scoped>
.naturalius {
  &-main {
    padding: 14% 0 20% 0;
  }
}

#title {
  font-size: 5rem;
  padding-right: 5%;
}

#subtitle {
  font-size: 2rem;
  padding-right: 15%;
}

#button {
  background-color: #1C769D;
}

#button-2 {
  background-color: #3BACDC;
}

@media only screen and (max-width: 768px) and (max-device-width: 768px) {
  #title {
    font-size: 3.8rem;
    padding-right: 0;
  }

  #subtitle {
    font-size: 1.5rem;
    padding-right: 0;
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
