<template>
    <v-container>
    <v-row justify="center">
    <v-col cols="12">
        <div class="pa-4 text-center rounded-0 elevation-2 shaped">
            <h1>Formulario</h1>
        </div>
    </v-col>
    </v-row>

    <FormComponent/>
</v-container>
</template>

<script>
import FormComponent from "@/components/FormularioComponente.vue"

export default {
    name: "AboutView",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { FormComponent }
};
</script>