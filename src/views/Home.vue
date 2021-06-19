<template>
  <v-app>
    <Header/>
    <Homepage/>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
import Homepage from '../components/Homepage.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    Header,
    Homepage,
    Footer
  },
})
</script>
