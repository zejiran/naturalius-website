<template>
  <div>
    <v-container align-start class="naturalius-products" fluid justify-center>
      <p class="pb-16 text-center text-h3 text-md-h2">Products</p>

      <v-row class="pt-16 px-16">
        <v-col
            v-for="product in products"
            :key="product"
            class="ma-auto"
            cols="12" md="3" sm="6">
          <v-card

          >
            <v-img
                :src="product.image"
                height="15rem"
            ></v-img>

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
    background-color: rgba(167, 218, 240, 0.4);
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
import p1 from "@/assets/images/nature/nature-1.jpg";
import p2 from "@/assets/images/nature/nature-2.jpg";
import p3 from "@/assets/images/nature/nature-3.jpg";
import p4 from "@/assets/images/nature/nature-4.jpg";

export default Vue.extend({
  name: 'Products',

  data: () => ({
    products: {
      1: {
        'title': 'Fragment-enhanced option',
        'subtitle': 'Design your molecule',
        'image': p1,
        'show': false,
        'text': 'Computational design of molecules of interest in academia and industry (pharmaceutical, cosmetics and others in the biotechnology area), especially using product databases natural. Different parts of molecules can be combined to generate new ones, which is a strength of our work team.',
      },
      2: {
        'title': 'Hit-identification phase',
        'subtitle': 'We look for the molecule of your dreams',
        'image': p2,
        'show': false,
        'text': 'Study of molecules through a process of search and selection among thousands or millions of them, in order to discover new chemical structures and/or biological activities of interest. This allows to significantly reduce time, costs and number of experiments.',
      },
      3: {
        'title': 'Biomolecule simulator',
        'subtitle': 'We make sure that your molecule behaves well',
        'image': p3,
        'show': false,
        'text': 'We offer a very innovative platform to carry out various calculations such as the characterization, simulation and evaluation of molecules, which are not possible without the necessary capacity of hardware, software and specialized knowledge in the area.',
      },
      4: {
        'title': 'Synthesis-planner option',
        'subtitle': 'Bring your molecule to the market',
        'image': p4,
        'show': false,
        'text': 'Our team offers support for the optimization and balance of properties of interest in candidate molecules such as affinity, solubility and chemical diversity. This step usually plays a role key in the planning of future experiments required by our clients.',
      },
    }
  }),
})
</script>
