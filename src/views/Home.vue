<template>
  <v-app>
    <Header/>
    <MainCarrousel/>
    <Track/>
    <Products/>
    <Allies/>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
import MainCarrousel from '../components/MainCarrousel.vue'
import Track from '../components/Track.vue'
import Products from '../components/Products.vue'
import Allies from '../components/Allies.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    Header,
    MainCarrousel,
    Track,
    Products,
    Allies,
    Footer
  },
})
</script>
