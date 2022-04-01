<template>
     <section id="Pedido">
        <h2 class="subtitle pink centered padding-top-subtitle">Realiza tu pedido!</h2>
        <div class="flex-container">
            <div class="card">
                <form @submit.prevent="handleSubmit">
                    <label>Ingresa tu nombre:</label>
                    <input type="text" placeholder="Nombre" v-model="nombre"><br>
                    <label>Ingresa tu Número Telefónico:</label>
                    <input type="number" placeholder="Telefono" v-model="telefono"><br>
                    <label>Ingresa tu Email:</label>
                    <input type="email" placeholder="correo@ejemplo.com" v-model="email"><br>
                    <label>Describe tu pastel:</label>
                    <textarea cols="30" rows="10" placeholder="Ingresa la descripción de la estética de tu pastel :)" v-model="descripcion"> </textarea><br>
                    <label>Selecciona el sabor:</label>
                    <select v-model="sabor">
                        <option value="Cremosa Vainilla">Cremosa Vainilla</option>
                        <option value="Chocolate Extreme">Chocolate Extreme</option>
                        <option value="Muchas Leches">Muchas Leches</option>
                    </select><br>
                    <label>Selecciona los extras:</label><br>
                    <input type="checkbox" value="Salsa MilkyWay" v-model="toppings">
                    <label>Salsa MilkyWay</label>
                    <input type="checkbox" value="Salsa Kinder" v-model="toppings">
                    <label>Salsa Kinder</label>
                    <input type="checkbox" value="Snickers" v-model="toppings">
                    <label>Snickers</label>
                    <input type="checkbox" value="Brownies" v-model="toppings">
                    <label>Brownies</label>
                    <input type="checkbox" value="M&Ms" v-model="toppings">
                    <label>M&Ms</label>
                    <br><br>

                    <input type="reset">
                    <input type="submit">
                    <br>
                </form>
                <!-- <p>
                    {{nombre}}
                    {{telefono}}
                    {{email}}
                    {{descripcion}}
                    {{toppings}}
                    {{sabor}}
                </p> -->
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: 'order',
    data(){
        return{
            nombre: '',
            telefono: '',
            email: '',
            descripcion: '',
            toppings: '',
            sabor: '',
            toppings: [],
        }
    },
    methods:{
        handleSubmit(){
            console.log('submitted');
            console.log(this.nombre, this.telefono, this.email, this.descripcion, this.sabor, this.toppings);
            let pedido = {
                Nombre: this.nombre.toString(),	
                Telefono: this.telefono.toString(),
                Email: this.email.toString(),
                Descripcion: this.descripcion.toString(),
                Sabor: this.sabor.toString(),
                Toppings: this.toppings.toString(),
            };
            this.$store.commit('guardarPedido', pedido);
        }
    }
}
</script>
