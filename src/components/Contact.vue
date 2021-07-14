<template>
  <v-parallax
    dark
    src="@/assets/images/cocoa.jpeg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          Make an appointment with us
        </h1>
        <v-btn class="subheading" href="https://calendly.com/naturaliusbiotech/30min" elevation="8">
          Request a demo today
        </v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>
