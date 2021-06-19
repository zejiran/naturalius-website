<template>
  <v-footer id="naturalius-main" bottom dark padless>
    <v-row class="mt-7 mb-14" no-gutters>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Naturalius</strong>
      </v-col>
      <v-col class="text-center" cols="12">
        <v-btn v-for="reference in references" :key="reference" :href="reference.href" icon>
          <v-icon size="24px">
            {{ reference.icon }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss" scoped>
#naturalius-main {
  background-color: #4fb3bf
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
        icon: 'mdi-github',
        href: 'https://github.com/naturalius',
      },
      {
        icon: 'mdi-youtube',
        href: 'https://www.youtube.com/channel/UC1U1DCSpBS9HOIY2dHS32Xw',
      },
    ],
  }),
})
</script>
