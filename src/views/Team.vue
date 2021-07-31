<template>
  <v-app>
    <Header/>
    <Contact/>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'

import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
  name: 'Team',

  components: {
    Header,
    Contact,
    Footer
  },
})
</script>
