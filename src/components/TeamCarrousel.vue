<template>
  <div>
    <v-img height="40rem" src="@/assets/images/team/team.jpg"></v-img>

    <v-layout class="naturalius-main px-5 pl-md-15 pl-xl-16" fluid justify-center>
      <v-row class="px-2 pl-xl-16" no-gutters>
        <v-col cols="12">
          <p id="title" class="font-weight-bold white--text text-center">Know our team</p>
        </v-col>
      </v-row>
    </v-layout>

    <v-layout align-center justify-center fluid class="pa-16">
      <v-row class="pa-16" no-gutters>
        <v-col class="mx-md-16 mx-auto" cols="12">
          <p class="text-md-h2 text-h4">At Naturalius we share the same passion for new and fascinating discoveries in
            biotechnology.</p>
          <p class="text-md-h4 text-h6 pt-8">We are a company created through friendship, creativity and scientific curiosity.</p>
        </v-col>
      </v-row>
    </v-layout>
    <v-divider></v-divider>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "TeamCarrousel",
})
</script>

<style lang="scss" scoped>
.naturalius {
  &-main {
    padding: 12% 0 20% 0;
    position: absolute;
    top: 0;
  }
}

#title {
  font-size: 5rem;
}

#subtitle {
  font-size: 2rem;
  padding-right: 15%;
}

@media only screen and (max-width: 768px) and (max-device-width: 768px) {
  .naturalius {
    &-main {
      padding: 40% 0 20% 0;
    }
  }

  #title {
    font-size: 3.8rem;
    padding-right: 0;
  }

  #subtitle {
    font-size: 1.5rem;
    padding-right: 0;
  }
}

@media only screen and (max-width: 400px) and (max-device-width: 400px) {
  .naturalius {
    &-main {
      padding: 50% 3% 0 3%;
    }
  }

  #title {
    font-size: 3.3rem;
  }
}
</style>
