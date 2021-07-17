<template>
  <v-container id="choose-us" align-start fluid justify-center>
    <v-row>
      <v-col class="text-center img-container" cols="12" md="6">
        <v-lazy
            v-model="isActive"
            :options="{
          threshold: .5
        }"
            min-height="200"
            transition="scale-transition"
        >
          <lottie-animation
              ref="Naturalius AI"
              :animationData="require('@/assets/lottie/screens.json')"
              :autoPlay="true"
              :loop="true"
              :speed="1"
          />
        </v-lazy>
      </v-col>
      <v-col class="text-center definition" cols="12" md="6">
        <p class="pb-5 text-left text-h3 text-md-h2">Why to choose Naturalius?</p>
        <p class="text-justify">Stay ahead of the competition with our advanced solutions through cutting-edge compchem
          approaches, hi-tech automation systems, and the best practice models to achieve the highest quality in the
          creation of value and to maximize your profits.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.img-container {
  width: 75%;
}

.definition {
  padding-right: 15%;
  padding-left: 5%;
}

#choose-us {
  font-size: 1.3rem;
  padding-top: 8%;
  padding-bottom: 7%;
}

@media only screen and (max-width: 1240px) and (max-device-width: 1240px) {
  .definition {
    padding-right: 2%;
    padding-left: 7%;
  }
}

@media only screen and (max-width: 958px) and (max-device-width: 958px) {
  .definition {
    padding-right: 3%;
    padding-left: 3%;
  }
}

@media only screen and (max-width: 958px) and (max-device-width: 958px) {
  #track {
    font-size: 1.1rem;
  }
}
</style>

<script lang="ts">
import {Vue} from "vue-property-decorator";
import LottieAnimation from 'lottie-web-vue';

Vue.use(LottieAnimation)

export default Vue.extend({
  name: 'Choose Us',

  data: () => ({
    isActive: false,
  }),
  components: {
    LottieAnimation
  },
})
</script>
