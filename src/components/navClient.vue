<template>
    <header>
        <div class="topnav">
        <scrollactive>
        <a class="" href="#"><img src="../assets/img/output-onlinegiftools.gif" alt="Logo.png" style="width: 20px;"> </a>
        <a class="scrollactive-item" href="#">Inicio</a>
        <a class="scrollactive-item" href="#" v-scroll-to="'#Nosotros'">Nosotros</a>
        <a class="scrollactive-item" href="#" v-scroll-to="'#Clientes'">Clientes</a>
        <a class="scrollactive-item" href="#" v-scroll-to="'#Productos'">Productos</a>
        <a class="scrollactive-item" href="#" v-scroll-to="'#Pedido'">Hacer un Pedido</a>
        <a class="scrollactive-item" href="#" v-scroll-to="'#Footer'">Contacto</a>
        </scrollactive>
        </div>
    </header>
</template>

<script>
export default {
    name: 'navclient',
}
</script>