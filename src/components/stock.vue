<template>
    <section id="Stock">
        <div class="flex-container">
            <div class="card centered" style="width: 35%; margin: 20px;">
                <h2 class="subtitle pink centered">Stock Sabores</h2>
                <form action="">
                    <label>Cremosa Vainilla</label>
                    <label class="pink"> {{ $store.getters.cantidadVainilla }} kg</label>
                    <br>
                    <label>Chocolate Extreme</label>
                    <label class="pink"> {{ $store.getters.cantidadChocolate }} kg</label>
                    <br>
                    <label>Muchas Leches</label>
                    <label class="pink"> {{ $store.getters.cantidadLeche}} kg</label>              
                </form>
            </div>
            <div class="card centered" style="width: 35%; margin: 20px;">
                <h2 class="subtitle pink centered ">Toppings</h2>
                <form action="">
                    <label>Salsa MilkyWay</label>
                    <label class="pink"> {{ $store.getters.cantidadMilkyWay}} kg</label>    
                    <br>
                    <label>Salsa Kinder</label>
                    <label class="pink"> {{ $store.getters.cantidadSalsaKinder}} kg</label> 
                    <br>
                    <label>Snickers</label>
                    <label class="pink"> {{ $store.getters.cantidadSnickers}} kg</label> 
                    <br>
                    <label>Brownies</label>
                    <label class="pink"> {{ $store.getters.cantidadBrownies}} kg</label> 
                    <br>
                    <label>M&Ms</label>
                    <label class="pink"> {{ $store.getters.cantidadMandMs}} kg</label>                  
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'stock',
}
</script>