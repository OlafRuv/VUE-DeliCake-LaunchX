<template>
    <section id="Pedidos">
        <h2 class="subtitle pink centered ">Pedidos</h2>
        <div class="white-section">
            <table id="pedidos">
                <tr>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Telefono
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Descripcion
                    </th>
                    <th>
                        Sabor
                    </th>
                    <th>
                        Toppings
                    </th>
                </tr>
                <tr v-for="(data, index) in pedidos" :key="index">
                    <td> {{ data.Nombre }}</td>
                    <td> {{ data.Telefono }}</td>
                    <td> {{ data.Email }}</td>
                    <td> {{ data.Descripcion }}</td>
                    <td> {{ data.Sabor }}</td>
                    <td> {{ data.Toppings }}</td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: 'orderTable',
    computed: {
        pedidos(){
            return this.$store.state.pedidos;
        }
    },
    methods: {
        getPedidos(){
            console.log(this.pedidos);
        }
    }
}
</script>