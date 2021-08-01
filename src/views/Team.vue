<template>
  <v-app>
    <Header/>
    <People/>
    <Contact/>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
import People from '../components/People.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
  name: 'Team',

  components: {
    Header,
    People,
    Contact,
    Footer
  },
})
</script>
