<template>
  <div>
  <v-img height="67rem" src="@/assets/images/team/team.jpg"></v-img>

  <v-layout align-start class="naturalius-main px-5 pl-md-15 pl-xl-16" fluid justify-center>
          <v-row class="px-2 pl-xl-16" no-gutters>
            <v-col cols="12">
              <p id="title" class="font-weight-bold white--text text-md-left text-center">Know our team</p>
            </v-col>
            <v-col class="pb-15" cols="12">
              <p id="subtitle" class="white--text text-md-left text-center mr-16">At Naturalius we share the same passion for new and fascinating discoveries in biotechnology.
We are a company created through friendship, creativity and scientific curiosity.</p>
            </v-col>
          </v-row>
  </v-layout>
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
    padding: 14% 0 20% 0;
    position: absolute;
    top: 0;
    z-index: 10;
  }
}

#title {
  font-size: 5rem;
  padding-right: 5%;
}

#subtitle {
  font-size: 2rem;
  padding-right: 15%;
}

#button {
  background-color: #1C769D;
}

#button-2 {
  background-color: #3BACDC;
}

@media only screen and (max-width: 768px) and (max-device-width: 768px) {
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
      padding: 30% 3% 35% 3%;
    }
  }

  #title {
    font-size: 3.3rem;
  }
}
</style>
