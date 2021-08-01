<template>
  <v-container class="my-16">
    <v-row>
      <v-col
          v-for="(member, i) in people"
          :key="i"
          cols="12"
      >
        <v-card
            max-width="70%"
            class="mx-auto pa-md-9 pr-6 my-5"
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

              <a style="text-decoration: none" :href="'mailto:' + member.email"><v-card-subtitle class="pt-0">E-mail: {{ member.email }}</v-card-subtitle></a>
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
import p1 from '@/assets/images/team/1.jpeg';
import p2 from '@/assets/images/team/2.jpg';
import p3 from '@/assets/images/team/3.png';
import p4 from '@/assets/images/team/4.jpeg';
import p5 from '@/assets/images/team/5.jpeg';
import p6 from '@/assets/images/team/6.jpg';

export default Vue.extend({
  name: 'People',

  data: () => ({
    people: [
      {
        image: p1,
        name: 'Andrés Felipe Vásquez Jiménez',
        email: 'af.vasquez231@uniandes.edu.co',
        background: 'Investigador Postdoctoral en Diseño de Fármacos Asistido por Computadora (CADD) en la Universidad de los Andes y Co-Fundador de Naturalius. Sus estudios incluyen un título de Pregrado en Biología (mención en Genética), una Maestría en Ciencias Biológicas (Área: Microbiología), una Maestría en Biología Computacional y un Doctorado en Ingeniería Química. Experto en química computacional y quimioinformática, que incluye modelamiento molecular de proteínas, diseño por fragmentos (FBDD), librerías químicas basadas en productos naturales (NPs), y protocolos de screening virtual (VS) para el descubrimiento de inhibidores single- y multi-target (incluyendo un proyecto actual en SARS-CoV-2 financiado por MinCiencias). Fue investigador asociado al Instituto Nacional de Salud (INS) en Bogotá por casi 4 años e investigador visitante en el Instituto Italiano de Tecnología (IIT) en Génova (Italia). Actualmente colabora con actividades de proyección estratégica de la compañía, incluyendo la validación del modelo de negocio, la creación y fortalecimiento del equipo de trabajo interdisciplinario, y la búsqueda de financiación e infraestructura.',
        linkedin: 'https://www.linkedin.com/in/andrés-felipe-vásquez-jiménez-852170a2/'
      },
      {
        image: p2,
        name: 'Dorian Armando Acevedo Castro',
        email: 'da.acevedo10@uniandes.edu.co',
        background: 'Candidato a Doctorado en Química de la Universidad de los Andes y Co-Fundador de Naturalius. Sus estudios incluyen un título de Pregrado en Química y una Maestría en Ciencias Químicas. Experto en \n' +
            'cannabinoides y metaloproteínas, además de dominio de herramientas computacionales a nivel de mecánica molecular (MM) y cuántica (QM), métodos de muestreo avanzado como Umbrella \n' +
            'Sampling (US) y metadinámica (meta-D), y técnicas híbridas de estimación de energía en complejos proteína-ligando como QM/MM, MM/PBSA y MM/GBSA. Asimismo, Dorian representa un gran aporte equipo tanto en el diseño de metodologías de química analítica como en la síntesis de péptidos en fase sólida (y su posterior caracterización con HPLS y MALDI-TOF), aprovechando su amplia experiencia en diversos ámbitos de la industria como director o consultor científico. Actualmente coopera activamente en la constitución del modelo de negocio, análisis de mercado objetivo y el marketing de nuestros productos y servicios, así como con actividades relacionadas a la conectividad y la organización de nuestro equipo de trabajo.',
        linkedin: 'https://www.linkedin.com/in/dorian-acevedo/'
      },
      {
        image: p3,
        name: 'María Camila Martínez Villa',
        email: 'mc.martinez297@uniandes.edu.co',
        background: 'Científica de datos y Administradora de Proyectos en Alianza CAOBA, la primera alianza público-privada en Big Data de Colombia. Sus estudios incluyen un título profesional en Biología (énfasis en Bioinformática) y una Maestría en Biología Computacional. Camila cuenta con una amplia experiencia en recolección de datos, procesamiento y carga de datos (ETL), análisis estadístico multivariante, desarrollo de modelos analíticos y herramientas como PowerBI, Tableau o Dash. Asimismo, tiene habilidades de programación R, Python, Java, JavaScript (JS), SQL, Git, así como en aplicaciones como React, Conda, Jupyter y servicios computación escalable en la nube via Amazon Web Services (AWS). Actualmente juega un rol clave como enlace entre las áreas de química computacional, bioinformática, ML y AI a través de metodologías ágiles CRISP-DM, incluyendo la gestión, adquisición y comprensión de datos, modelado, evaluación y explotación.',
        linkedin: 'https://www.linkedin.com/in/kamymartinez/'
      },
      {
        image: p4,
        name: 'Sofia Cristina Castillo Guerrero',
        email: 'sc.castillo@uniandes.edu.co',
        background: 'Economista e Ingeniera Industrial de la Universidad de los Andes. Sofia tiene experiencia internacional basado en un intercambio con la Universidad de Groningen, Países Bajos, en el área de Economía y cuenta con un amplio dominio de los idiomas inglés, francés e italiano. Sofía ha tenido la oportunidad de trabajar como monitora de varias materias en la Universidad de Los Andes y fue la representante estudiantil para la facultad de Economía en el 2018. Actualmente ocupa el cargo de GMT (Global Management Trainee) en Bavaria. Recientemente, Sofía se ha unido al equipo Naturalius con el fin de liderar la parte financiera y de proyección estratégica de crecimiento, incluyendo el desarrollo de estudios de mercadeo, identificación de necesidades del mercado y contacto con potenciales clientes y aliados nacionales e internacionales tanto en el ámbito académico como industrial.',
        linkedin: 'https://www.linkedin.com/in/sofía-castillo-guerrero-6a1742152/'
      },
      {
        image: p5,
        name: 'Julián Alexander Martínez Logreira',
        email: 'ja.martinez1423@uniandes.edu.co',
        background: 'Investigador asociado al Centro para la Investigación y Formación en Inteligencia Artificial (CINFONIA) de la Universidad de los Andes. Sus estudios incluyen una doble titulación en Ingeniería Electrónica e Ingeniería Biomédica (énfasis en Física), así como una Maestría en Ingeniería Biomédica. Julián tiene amplia experiencia en el diseño y optimización de modelos basados en herramientas de aprendizaje de máquina (ML), tanto en la aplicación de técnicas clásicas como en el uso de técnicas de aprendizaje profundo (DL). En esta área ha trabajado con diversos tipos de datos, utilizando técnicas vanguardistas para la generación adversaria de imágenes médicas (GANS) o el uso de redes neuronales de grafos (GNN) para el análisis de datos genéticos. Como trabajo adicional en este momento es parte de un equipo de trabajo en CINFONIA para la aplicación de ML en la solución de problemáticas relacionadas al COVID-19. Actualmente coordina y realiza las acciones enfocadas al desarrollo e implementación de modelos de inteligencia artificial para el portafolio de productos de Naturalius.',
        linkedin: 'https://www.linkedin.com/in/jualmalog/'
      },
      {
        image: p6,
        name: 'Juan Sebastián Alegría Zúñiga',
        email: 'j.alegria@uniandes.edu.co',
        background: 'Desarrollador de software, actualmente estudiante en Ingeniería de Sistemas de la Universidad de los Andes. Juan tiene importantes habilidades en desarrollo Fullstack, construcción de aplicaciones móviles, diseño de arquitecturas y soluciones con software, y en tecnologías como HTML, CSS, Javascript, Python, React, Django, Flutter, Go, Vue.js, Java, SQL, C/C++, Firebase, Git y AWS. Ha trabajado en startups de YCombinator y en varios proyectos freelance. Juan está actualmente contribuyendo de forma continua con Naturalius en la generación de plataformas y servicios web, así como apoyando diversas actividades relacionadas al diseño e implementación de modelos basados en inteligencia artificial (AI).',
        linkedin: 'https://www.linkedin.com/in/juanszalegria/'
      }
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
