<template>
    <header>
        <div class="topnav">
            <a class="" href="#"><img src="../assets/img/LOGO_BIRTHDAY_CAKE_400px.gif" alt="Logo.png" style="width: 20px;"> </a>
            <a class="active" href="#">Inicio</a>
            <a class="" href="#" v-scroll-to="'#Stock'">Stock</a>
            <a class="" href="#" v-scroll-to="'#Pedidos'">Pedidos</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'navAdmin',
}
</script>