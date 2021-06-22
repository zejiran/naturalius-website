<template>
  <div>
    <v-layout align-start class="white--text naturalius-main" fluid justify-center>
      <v-row class="pb-16 px-2" no-gutters>
        <v-col class="text-center pb-2" cols="12">
          <p id="title" class="font-weight-bold">Taking nature to the next level</p>
        </v-col>
        <v-col class="text-center pb-15" cols="12">
          <p id="subtitle">We make use of biotechnology to produce innovative compounds</p>
        </v-col>
        <v-col class="text-center" cols="12">
          <v-btn id="button" elevation="2" href="mailto:contact@naturalius.com.co" rounded text x-large>
            <span class="white--text">Contact us</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-layout>

    <v-container align-start fluid justify-center>
      <v-row class="pt-16">
        <v-col class="text-center text-container" md="6">
          <h1 class="pb-5 text-justify">Mision</h1>
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
        <v-col class="text-center text-container" md="6">
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

    <v-container align-start class="pt-16 pb-16 white--text naturalius-products" fluid justify-center>
      <h1 class="text-center">Products</h1>

      <v-row class="pt-16">
        <v-col class="text-center text-container" md="3">
          <h3 class="pb-5">Fragment-enhanced option</h3>
          <p class="font-italic">Design your molecule</p>
          <div class="pt-16 pb-16 img-container-product">
            <v-img
                alt="Fragment-enhanced option"
                max-width="300"
                src="@/assets/icons/products/p1.png"
                transition="scroll-y-transition"
            />
          </div>
          <p class="text-justify pb-5">Computational design of molecules of interest in academia and industry
            (pharmaceutical, cosmetics and others in the biotechnology area), especially using product databases
            natural. Different parts of molecules can be combined to generate new ones, which is a
            strength of our work team.</p>
        </v-col>
        <v-col class="text-center text-container" md="3">
          <h3 class="pb-5">Hit-identification phase</h3>
          <p class="font-italic">We look for the molecule of your dreams</p>
          <div class="pt-16 pb-16 img-container-product">
            <v-img
                alt="Hit-identification phase"
                max-width="300"
                src="@/assets/icons/products/p2.png"
                transition="scroll-y-reverse-transition"
            />
          </div>
          <p class="text-justify pb-5">Study of molecules through a process of search and selection among thousands or
            millions of them, in order to discover new chemical structures and/or biological activities of
            interest. This allows to significantly reduce time, costs and number of experiments.</p>
        </v-col>
        <v-col class="text-center text-container" md="3">
          <h3 class="pb-5">Biomolecule simulator</h3>
          <p class="font-italic">We make sure that your molecule behaves well</p>
          <div class="pt-16 pb-16 img-container-product">
            <v-img
                alt="Biomolecule simulator"
                max-width="300"
                src="@/assets/icons/products/p3.png"
                transition="scroll-y-transition"
            />
          </div>
          <p class="text-justify pb-5">We offer a very innovative platform to carry out various calculations such as the
            characterization, simulation and evaluation of molecules, which are not possible without the necessary
            capacity of hardware, software and specialized knowledge in the area.</p>
        </v-col>
        <v-col class="text-center text-container" md="3">
          <h3 class="pb-5">Synthesis-planner option</h3>
          <p class="font-italic">Bring your molecule to the market</p>
          <div class="pt-16 pb-16 img-container-product">
            <v-img
                alt="Synthesis-planner option"
                max-width="300"
                src="@/assets/icons/products/p4.png"
                transition="scroll-y-reverse-transition"
            />
          </div>
          <p class="text-justify pb-5">Our team offers support for the optimization and balance of properties of interest
            in candidate molecules such as affinity, solubility and chemical diversity. This step usually plays a role
            key in the planning of future experiments required by our clients.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.naturalius {
  &-main {
    background-color: #00838f;
    padding: 15% 0 20% 0;
  }

  &-products {
    background-color: #00838f;
    padding: 5% 0 5% 0;
  }
}

#title {
  font-size: 3.2rem;
}

#subtitle {
  font-size: 1.5rem;
}

#button {
  background-color: #005662
}

.img-container {
  margin: auto;
  width: 75%;

  &-product {
    margin: auto;
    width: 50%;
  }
}

.text-container {
  padding-right: 5%;
  padding-left: 5%;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Homepage',
})
</script>
