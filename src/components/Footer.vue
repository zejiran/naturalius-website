<template>
  <v-footer id="naturalius-footer" bottom class="py-10" padless>
    <v-row class="mt-12 mb-16" no-gutters>
      <v-col class="text-center mb-5" cols="12">
        <v-btn v-for="reference in references" :key="reference.icon" :href="reference.href" icon>
          <v-icon color="black" size="24px">
            {{ reference.icon }}
          </v-icon>
        </v-btn>
      </v-col>
      <v-col class="text-center grey--text" cols="12">
        © Naturalius {{ new Date().getFullYear() }}. All rights reserved.
      </v-col>
      <v-col class="text-center grey--text lighten-5" cols="12">
        Keep in touch: contact@naturalius.com.co
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss" scoped>
#naturalius-footer {
  background-color: white;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333rem;

}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  data: () => ({
    references: [
      {
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/company/naturalius',
      },
      {
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/Naturalius-103996428632104/',
      },
      {
        icon: 'mdi-github',
        href: 'https://github.com/naturalius',
      },
      {
        icon: 'mdi-youtube',
        href: 'https://www.youtube.com/channel/UC1U1DCSpBS9HOIY2dHS32Xw',
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/NaturaliusB',
      },
      {
        icon: 'mdi-instagram',
        href: 'https://www.instagram.com/naturaliusb/',
      },
    ],
  }),
})
</script>
