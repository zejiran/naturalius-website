<template>
  <v-app>
    <v-content>
      <v-alert
          v-if="!validLogin"
          dense
          outlined
          style="position: absolute; margin: 20px 30px"
          type="error"
      >
        Incorrect user or password
      </v-alert>
      <v-alert
          v-if="validLogin && login.length > 3 && password.length > 3"
          dense
          outlined
          style="position: absolute; margin: 20px 30px"
          type="success"
      >
        Click login button for being redirected
      </v-alert>
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
                      v-model="login"
                      label="Login"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                  ></v-text-field>
                  <v-text-field
                      id="password"
                      v-model="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#1C769D" dark @click="goToDashboard">Login</v-btn>
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

  data: () => ({
    login: '',
    password: '',
    validLogin: true,
  }),
  methods: {
    goToDashboard() {
      if (this.login == 'luker' && this.password == 'casa') {
        this.validLogin = true
        setTimeout(() => {
          //
        }, 200)
        this.$router.push('/dashboard');
        window.scrollTo(0, 0)
      } else {
        this.validLogin = false
      }
    }
  }
})

</script>

<style scoped>
</style>
