<template>
  <v-container>
    <v-row>
      <v-col
          v-for="(member, i) in people"
          :key="i"
          cols="12"
      >
        <v-card
            max-width="70%"
            class="mx-auto pa-md-9 pr-9"
        >
          <div class="d-md-flex flex-no-wrap justify-space-between">
            <v-avatar rounded class="ma-3" id="profile" style="width: 100%; height: auto">
              <v-img :src="member.image"></v-img>
            </v-avatar>

            <div id="information">
              <v-card-title
                  style="word-break: break-word;"
                  class="text-h6 text-md-h5"
                  v-text="member.name"
              ></v-card-title>

              <v-card-subtitle>E-mail: {{ member.email }}</v-card-subtitle>
              <v-card-subtitle class="text-justify" v-text="member.background"></v-card-subtitle>

              <v-card-actions>
                <v-btn
                    class="mt-2"
                    icon
                    target="_blank"
                    :href="member.linkedin"
                    height="40px"
                    width="40px"
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";
import p6 from '@/assets/images/team/6.jpg';

export default Vue.extend({
  name: 'People',

  data: () => ({
    people: [
      {
        image: p6,
        name: 'Juan Sebastián Alegría Zúñiga',
        email: 'j.alegria@uniandes.edu.co',
        background: 'Desarrollador de software, actualmente estudiante en Ingeniería de Sistemas de la Universidad de los Andes. Juan tiene importantes habilidades en desarrollo Fullstack, construcción de aplicaciones móviles, diseño de arquitecturas y soluciones con software, y en tecnologías como HTML, CSS, Javascript, Python, React, Django, Flutter, Go, Vue.js, Java, SQL, C/C++, Firebase, Git y AWS. Ha trabajado en startups de YCombinator y en varios proyectos freelance. Juan está actualmente contribuyendo de forma continua con Naturalius en la generación de plataformas y servicios web, así como apoyando diversas actividades relacionadas al diseño e implementación de modelos basados en inteligencia artificial (AI).',
        linkedin: 'https://www.linkedin.com/in/juanszalegria/'
      },
    ],
  }),
  methods: {
    route(location: string) {
      this.$router.push(location);
      window.scrollTo(0, 0)
    }
  },
})
</script>

<style scoped lang="scss">
#information {
  width: 100%;
}

@media only screen and (min-width: 960px) and (min-device-width: 960px) {
  #information {
    width: 65% !important;
    height: auto !important;
  }

  #profile {
    width: 30% !important;
    height: auto !important;
  }
}
</style>
