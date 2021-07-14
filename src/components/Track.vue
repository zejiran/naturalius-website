<template>
  <div>
    <v-container align-start fluid justify-center>
      <v-row class="pt-16">
        <v-col class="text-center definition" cols="12" md="6">
          <p class="pb-5 text-justify text-h2">Who we are?</p>
          <p class="text-justify">Naturalius is a Latin American startup that revolutionizes the design and discovery
            of
            new molecules through technology. We have an interdisciplinary group of experts in biology, chemistry,
            informatics and engineering with extensive experience in cutting-edge technologies, advanced automation
            systems and the best practice models, which allows us to achieve the highest quality in the creation of
            value, satisfy specific needs and ensure a competitive advantage for our clients.
          </p>
        </v-col>
        <v-col class="text-center text-container" cols="12" md="6">
          <v-img alt="Naturalius AI" src="@/assets/images/creative_experiment.svg" transition="fade-transition"/>
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

.definition {
  padding-right: 15%;
  padding-left: 15%;
}
</style>

<script lang="ts">
import {Vue} from "vue-property-decorator";

export default Vue.extend({
  name: 'Track',
})
</script>
