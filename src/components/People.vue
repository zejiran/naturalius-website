<template>
  <v-container id="track" align-start fluid justify-center>
    <v-row>
      <v-col class="definition" cols="12" md="6">
        <p class="pt-16 pb-5 text-left text-h3 text-md-h2">Who we are?</p>
        <p class="text-justify">Naturalius is a Latin American startup that revolutionizes the design and discovery of
          new molecules through biotechnology. We have an interdisciplinary group of experts in biology, chemistry,
          informatics, and engineering focused on satisfying specific needs of our clients.
        </p>
        <v-btn class="text-left white--text" color="#1C769D" elevation="8" @click="route('/team')">Know our team</v-btn>
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

<script>
export default {
name: "People"
}
</script>

<style scoped>

</style>
