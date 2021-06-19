<template>
  <v-layout id="naturalius-main" align-start class="white--text" fluid justify-center>
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
</template>

<style lang="scss" scoped>
#naturalius-main {
  background-color: #00838f;
  padding-top: 15%;
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
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Homepage',
})
</script>
