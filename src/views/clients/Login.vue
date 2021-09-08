<template>
  <v-app>
    <v-content>
      <v-container fill-height fluid>
        <v-layout align-center justify-center>
          <v-flex md4 sm8 xs12>
            <v-card class="elevation-12">
              <v-toolbar color="#1C769D" dark>
                <v-toolbar-title>Naturalius Client Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                      label="Login"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                  ></v-text-field>
                  <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#1C769D" dark to="/dashboard">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'Login',
});
</script>

<style scoped>
.theme--light.v-application {
  background-color: rgba(167, 218, 240, 0.25);
}
</style>
