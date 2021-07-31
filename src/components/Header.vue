<template>
  <!--TODO: add mobile header-->
  <v-app-bar id="naturalius-main" app dark hide-on-scroll>
    <div class="d-flex align-center">
      <v-img
          alt="Naturalius Name"
          class="shrink mt-1"
          contain
          min-width="130"
          src="@/assets/logos/naturalius1C769D.png"
          transition="scale-transition"
          width="200"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn v-for="item in sections" :key="item.text" text @click="route(item.href)">
      <span class="mr-2">{{ item.text }}</span>
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>
#naturalius-main {
  background-color: #1C769D
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',

  methods: {
    route(location: string) {
      this.$router.push(location);
      window.scrollTo(0, 0)
    }
  },
  data: () => ({
    sections: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'About Us',
        href: '/team',
      },
    ],
  }),
})
</script>
