<template>
  <div>
    <v-container align-start class="white--text naturalius-products" fluid justify-center>
      <h1 class="text-center">Products</h1>

      <v-row class="pt-16">
        <v-col class="text-center text-container" cols="12" md="3">
          <h3 class="pb-5">Fragment-enhanced option</h3>
          <p class="font-italic">Design your molecule</p>
          <v-img
              alt="Fragment-enhanced option"
              class="pt-16 pb-16 img-container-product"
              contain
              max-width="300"
              src="@/assets/icons/products/p1.png"
              transition="scroll-y-transition"
              width="50%"
          />
          <p class="text-justify pb-5">Computational design of molecules of interest in academia and industry
            (pharmaceutical, cosmetics and others in the biotechnology area), especially using product databases
            natural. Different parts of molecules can be combined to generate new ones, which is a
            strength of our work team.</p>
        </v-col>
        <v-col class="text-center text-container" cols="12" md="3">
          <h3 class="pb-5">Hit-identification phase</h3>
          <p class="font-italic">We look for the molecule of your dreams</p>
          <v-img
              alt="Hit-identification phase"
              class="pt-16 pb-16 img-container-product"
              contain
              max-width="300"
              src="@/assets/icons/products/p2.png"
              transition="scroll-y-reverse-transition"
              width="50%"
          />
          <p class="text-justify pb-5">Study of molecules through a process of search and selection among thousands or
            millions of them, in order to discover new chemical structures and/or biological activities of
            interest. This allows to significantly reduce time, costs and number of experiments.</p>
        </v-col>
        <v-col class="text-center text-container" cols="12" md="3">
          <h3 class="pb-5">Biomolecule simulator</h3>
          <p class="font-italic">We make sure that your molecule behaves well</p>
          <v-img
              alt="Biomolecule simulator"
              class="pt-16 pb-16 img-container-product"
              contain
              max-width="300"
              src="@/assets/icons/products/p3.png"
              transition="scroll-y-transition"
              width="50%"
          />
          <p class="text-justify pb-5">We offer a very innovative platform to carry out various calculations such as the
            characterization, simulation and evaluation of molecules, which are not possible without the necessary
            capacity of hardware, software and specialized knowledge in the area.</p>
        </v-col>
        <v-col class="text-center text-container" cols="12" md="3">
          <h3 class="pb-5">Synthesis-planner option</h3>
          <p class="font-italic">Bring your molecule to the market</p>
          <v-img
              alt="Synthesis-planner option"
              class="pt-16 pb-16 img-container-product"
              contain
              max-width="300"
              src="@/assets/icons/products/p4.png"
              transition="scroll-y-reverse-transition"
              width="50%"
          />
          <p class="text-justify pb-5">Our team offers support for the optimization and balance of properties of
            interest
            in candidate molecules such as affinity, solubility and chemical diversity. This step usually plays a role
            key in the planning of future experiments required by our clients.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.naturalius {
  &-products {
    background-color: #00838f;
    padding: 10% 0 10% 0;
  }
}

.img-container {
  margin: auto;
  width: 75%;

  &-product {
    margin: auto;
  }
}

.text-container {
  padding-right: 5%;
  padding-left: 5%;
}

@media only screen and (max-width: 400px) and (max-device-width: 400px) {
  .naturalius {
    &-products {
      background-color: #00838f;
      padding: 20% 0 20% 0;
    }
  }
}
</style>

<script lang="ts">
import {Vue} from "vue-property-decorator";

export default Vue.extend({
  name: 'Products',
})
</script>
