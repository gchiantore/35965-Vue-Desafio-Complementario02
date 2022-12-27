<template>
    <v-container col-md-8 class="elavation-2">
        <v-alert v-if="errores.length!=0" 
            type="error"
            border="bottom"
            color="pink darken-1"
            dark
            >{{showErrors}}
        </v-alert>
        <form @submit.prevent="formValidate" id="productform">
            <v-text-field
                v-model="objproducto.producto"
                label="Producto">
            </v-text-field>

            <v-select
                v-model="objproducto.tamano"
                :items="items"
                label="Tamaño">
            </v-select>

            <h5>Estilo de Ridding</h5>
            <div class="row">
                <div class="col-md-4">
                    <v-checkbox
                        v-model="objproducto.riddingtype"
                        value="Wave"
                        label="Wave">
                    </v-checkbox>
                </div>
                <div class="col-md-4">
                    <v-checkbox
                        v-model="objproducto.riddingtype"
                        value="FreeStyle"
                        label="FreeStyle">
                    </v-checkbox>
                </div>
                <div class="col-md-4">
                    <v-checkbox
                        v-model="objproducto.riddingtype"
                        value="Big Air"
                        label="Big Air">
                    </v-checkbox>
                </div>
            </div>
            <h5>Producto Activo?</h5>
            <v-radio-group value="objproducto.activo">
                <v-radio
                    label="SI"
                    value="SI"
                ></v-radio>
                <v-radio
                    label="NO"
                    value="NO"
                ></v-radio>
            </v-radio-group>
            <v-btn class="mr-4" type="submit">Agregar</v-btn>
        </form>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {

    name:'FormComponent',
    data() {
        return {
            items: ['9 Metros', '12 Metros', '14 Metros'],
            objproducto:{
                producto:'',
                tamano:'',
                riddingtype:[],
                activo:'SI',
            },
            errores:[]
        };
    },
    created() {
        this.getApi();
    },
    methods: {
        ...mapActions(['getApi','postApi']),
        formValidate() {
            if(this.objproducto.producto && this.objproducto.riddingtype.length!=0 && this.objproducto.tamano){
                setTimeout(() => {
                    this.postApi(this.objproducto)
                    document.getElementById("productform").reset();
                    Object.assign(this.$data, this.$options.data());
                }, 1000);
                return true;
            }
            if(!this.objproducto.producto){
                this.errores.push("El nombre del producto es necesario ");
            }
            if(!this.objproducto.tamano){
                this.errores.push("Debes seleccionar un Tamaño");
            }
            if(this.objproducto.riddingtype.length == 0){
                this.errores.push("Debes elegir un tipo de Ridding")
            } 
            setTimeout(() => {
                this.errores=[];
            }, 3000);
        }
        
    },
    computed: {
        showErrors() {
            let formErrores=this.errores.join(" <--> ");
            return formErrores;
        }
    },
}
</script>

<style>

</style>