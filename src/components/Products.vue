<template>
  <div>
    <v-container id="products" align-start class="naturalius-products" fluid justify-center>
      <p class="pb-16 text-center text-h3 text-md-h2">What we offer?</p>

      <v-row class="pt-12 px-xl-16 mx-md-16 mx-sm-7 mx-5 justify-center">
        <v-col
            v-for="(product, key) in products"
            :key="key"
            class="ma-xl-2"
            cols="12" md="4" sm="6" xl="3">
          <v-card>
            <v-lazy
                v-model="isActive"
                :options="{
                  threshold: .9
                 }"
                min-height="200"
                transition="scale-transition"
            >
              <lottie-animation
                  ref="animation"
                  :animationData="product.image"
                  :autoPlay="true"
                  :loop="true"
                  :speed="1"
              />
            </v-lazy>

            <v-card-title id="product-title" class="text-justify">{{ product.title }}</v-card-title>

            <v-card-subtitle class="text-caption">{{ product.subtitle }}</v-card-subtitle>

            <v-card-actions>
              <!--TODO:<v-btn color="blue lighten-2" text>More</v-btn>-->

              <v-spacer></v-spacer>

              <v-btn icon @click="product.show = !product.show">
                <v-icon>{{ product.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="product.show">
                <v-divider></v-divider>

                <v-card-text>{{ product.text }}</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.naturalius {
  &-products {
    background-color: rgba(167, 218, 240, 0.25);
    padding: 10% 0 20% 0;
  }
}

@media only screen and (max-width: 410px) and (max-device-width: 410px) {
  .naturalius {
    &-products {
      padding: 20% 0 20% 0;
    }
  }

  #product-title {
    font-size: 1rem;
  }
}
</style>

<script lang="ts">
import {Vue} from "vue-property-decorator";
import p1 from "@/assets/lottie/rendering.json";
import p2 from "@/assets/lottie/search.json";
import p3 from "@/assets/lottie/syncing.json";
import p4 from "@/assets/lottie/setting.json";
import p5 from "@/assets/lottie/processing.json";
import LottieAnimation from 'lottie-web-vue';

Vue.use(LottieAnimation)

export default Vue.extend({
  name: 'Products',

  components: {
    LottieAnimation
  },
  data: () => ({
    isActive: false,
    products: {
      1: {
        'title': 'Molecule design',
        'subtitle': 'Design your own library of molecules',
        'image': p1,
        'show': false,
        'text': 'Computational design of molecules of interest is a key area in academia and industries including pharma, cosmetics, and food, among others. Our team can use different parts of chemical compounds to construct novel chemical libraries, including especially those based on natural products because of their intrinsic chemical diversity and functionality.',
      },
      2: {
        'title': 'Hit-identification',
        'subtitle': 'We look for the molecule of your dreams',
        'image': p2,
        'show': false,
        'text': 'We search and select molecules among thousands or millions of them to discover innovative chemical structures and/or biological activities of interest. The iterative processing of structure- and ligand-based techniques using massive parallel computing architecture and cutting-edge algorithms allows to significantly reduce time, costs and number of experiments.',
      },
      3: {
        'title': 'Biomolecule simulator',
        'subtitle': 'We make sure that your molecule behaves well',
        'image': p3,
        'show': false,
        'text': 'Characterization, simulation, and evaluation of molecules demand not only a large capacity of hardware and software, but also a specialized knowledge in the area. We offer a very innovative platform to carry out large-scale calculations to predicts dynamic behavior and potency of your molecules according to the interaction with their biological target.',
      },
      4: {
        'title': 'Property profiling',
        'subtitle': 'Bring your molecule to the lab and the market',
        'image': p4,
        'show': false,
        'text': 'Our team offers support for the optimization and balance of properties of interest in candidate molecules such as affinity, solubility, and chemical diversity. This step plays a role key in the planning of future experiments required by our clients, by evaluating synthetic complexity, prioritizing synthetic routes, and proposing potential isosteric modifications during the hit–to-lead optimization.',
      },
      5: {
        'title': 'Biochemtion',
        'subtitle': 'Boost your prediction power and improve your processes',
        'image': p5,
        'show': false,
        'text': 'All the industrial processes continuously demand adjustments to improve productivity and reduce operating costs. Our experts in engineering and informatics can develop a detailed understanding of your business and generate powerful algorithms for predictive modeling based on big data analytics (BDA) technologies such as novel machine learning (ML) or deep learning (DL).',
      },
    }
  }),
})
</script>
