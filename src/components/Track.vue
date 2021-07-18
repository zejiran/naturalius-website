<template>
  <v-container id="track" align-start fluid justify-center>
    <v-row>
      <v-col class="definition" cols="12" md="6">
        <p class="pt-16 pb-5 text-left text-h3 text-md-h2">Who we are?</p>
        <p class="text-justify">Naturalius is a Latin American startup that revolutionizes the design and discovery of
          new molecules through biotechnology. We have an interdisciplinary group of experts in biology, chemistry,
          informatics, and engineering focused on satisfying specific needs of our clients.
        </p>
        <!--TODO: <v-btn class="text-left" color="secondary" elevation="5">Our team</v-btn>-->
      </v-col>
      <v-col class="text-center" cols="12" md="6">
        <lottie-animation
            ref="Naturalius Definition"
            :animationData="require('@/assets/lottie/programming.json')"
            :autoPlay="true"
            :loop="true"
            :speed="1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.img-container {
  margin: auto;
  width: 75%;
}

.definition {
  padding-right: 5%;
  padding-left: 15%;
}

#track {
  font-size: 1.8rem;
  padding-top: 10%;
  padding-bottom: 15%;
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
  name: 'Track',

  components: {
    LottieAnimation
  },
})
</script>
