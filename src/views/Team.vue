<template>
  <v-app>
    <Header/>
    <Carrousel/>
    <People/>
    <Contact/>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
import Carrousel from "@/components/TeamCarrousel.vue";
import People from '../components/People.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
  name: 'Team',

  components: {
    Header,
    Carrousel,
    People,
    Contact,
    Footer
  },
})
</script>
