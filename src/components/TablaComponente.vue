<template>
    <v-data-table
        :headers="headers"
        :items="obtenerProductos"
        :items-per-page="10"
        class="elevation-1"
    >
    </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'TablaComponente',
    data() {
        return {
            headers: [{
                    text: 'Nombre',
                    align: 'start',
                    sortable: false,
                    value: 'producto',
                    },
                    {
                    text: 'Tamaño',
                    align: 'center',
                    sortable: false,
                    value: 'tamano',
                    },
                    {
                    text: 'Ridding Type',
                    align: 'start',
                    sortable: false,
                    value: 'riddingtype',
                    },
                    {
                    text: 'Activo',
                    align: 'center',
                    sortable: false,
                    value: 'activo',
                    },
            ],
            item:[]
        };
    },
    created() {
        this.getApi();
    },

    methods: {
        ...mapActions(['getApi']),

    },
    computed:{
        ...mapGetters(['obtenerProductos'])
    } 
}
</script>

<style>

</style>