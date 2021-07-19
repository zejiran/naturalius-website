<template>
  <div style="background-color: rgba(167, 218, 240, 0.25);">
    <v-container class="py-16" fluid>
      <p class="py-16 text-center text-h3 text-md-h2">Build the future of biotech with Naturalius</p>
      <v-row align="center">
        <v-col>
          <v-img alt="Naturalius AI" contain height="45rem" src="@/assets/images/launch.svg"
                 transition="scale-transition"/>
        </v-col>
      </v-row>
    </v-container>

    <v-parallax
        class="mt-16"
        dark
        src="@/assets/images/nature-book.jpeg"
    >
      <v-row
          align="center"
          justify="center"
      >
        <v-col
            class="text-center"
            cols="12"
        >
          <h1 class="text-h4 font-weight-thin mb-4 black--text">
            Make an appointment with us
          </h1>
          <v-btn class="subheading" color="secondary" elevation="8" href="https://calendly.com/naturaliusbiotech/30min">
            Request a demo today
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>
