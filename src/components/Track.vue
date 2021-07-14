<template>
  <div>
    <v-container align-start fluid justify-center>
      <v-row class="pt-16">
        <v-col class="text-center text-container" cols="12" md="6">
          <h1 class="pb-5 text-justify">Mission</h1>
          <p class="text-justify">Naturalius is the first colombian biotechnology company dedicated to the use of
            natural
            resources, mostly
            endemic exotic species and/or other non-endemic species of interest. Its central mission is to take
            advantage of and integrate cutting-edge technologies in order to reshape and accelerate R&D in academia and
            industry, favoring relevant scientific and technological discoveries that involve macromolecules and small
            molecules mainly derived from natural products.</p>
          <div class="pt-16 pb-16 img-container">
            <v-img alt="Naturalius Mision" src="@/assets/images/mision.jpg" transition="fade-transition"/>
          </div>
        </v-col>
        <v-col class="text-center text-container" cols="12" md="6">
          <h1 class="pb-5 text-justify">Vision</h1>
          <p class="text-justify">By 2030 Naturalius will be the leading start-up in bioprospecting services in
            the LATAM region, employing state-of-the-art processing capacity in the areas of chemistry, biology and
            engineering. Its long-term
            vision includes the promotion, implementation and development of interdisciplinary scientific initiatives
            aimed at revolutionizing bioprospecting and taking advantage of its impact on the pharmaceutical, cosmetic
            and nutraceutical industry, contributing in turn to the creation of value for society. For this purpose, it
            will have suitable, trained and committed personnel with the missionary purposes of the company and the
            country.</p>
          <div class="pt-16 pb-16 img-container">
            <v-img alt="Naturalius Vision" src="@/assets/images/vision.png" transition="fade-transition"/>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">

.img-container {
  margin: auto;
  width: 75%;
}

.text-container {
  padding-right: 5%;
  padding-left: 5%;
}
</style>

<script lang="ts">
import {Vue} from "vue-property-decorator";

export default Vue.extend({
  name: 'Track',
})
</script>
