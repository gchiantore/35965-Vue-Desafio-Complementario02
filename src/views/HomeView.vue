<template>
  <v-container>
      <v-row justify="center">
          <v-col cols="12">
              <div class="pa-4 text-center rounded-0 elevation-2 shaped">
                  <h1>Lista de Productos</h1>
              </div>
          </v-col>
      </v-row>
      <TablaComponente/>
  </v-container>
</template>

<script>
import TablaComponente from '@/components/TablaComponente.vue';

export default {
  name: "HomeView",
  data() {
      return {};
  },
  mounted() {
  },
  methods: {},
  components: {TablaComponente }
};
</script>
