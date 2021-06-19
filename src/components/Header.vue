<template>
  <v-app-bar app dark style="background-color: #005662">
    <div class="d-flex align-center">
      <!--      <v-img-->
      <!--          alt="Naturalius Logo"-->
      <!--          class="shrink mr-2"-->
      <!--          contain-->
      <!--          src="@/assets/naturalius-logo.png"-->
      <!--          transition="scale-transition"-->
      <!--          width="50"-->
      <!--      />-->

      <v-img
          alt="Naturalius Name"
          class="shrink mt-1"
          contain
          min-width="130"
          src="@/assets/naturalius-name.png"
          width="200"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn v-for="item in sections" :key="item" :href="item.href" text>
      <span class="mr-2">{{ item.text }}</span>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',

  data: () => ({
    sections: [
      {
        text: 'Home',
        href: 'https://naturalius.com.co',
      },
    ],
  }),
})
</script>
