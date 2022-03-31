<template>
    <section id="Stock">
        <div class="flex-container">
            <div class="card centered" style="width: 35%; margin: 20px;">
                <h2 class="subtitle pink centered">Stock Sabores</h2>
                <form action="">
                    <label>Cremosa Vainilla</label>
                    <input type="number" value="30" style="width: 50px;"  disabled>
                    <label for="">kg</label>
                    <br>
                    <label>Chocolate Extreme</label>
                    <input type="number" value="34" style="width: 50px;"  disabled>
                    <label for="">kg</label>
                    <br>
                    <label>Muchas Leches</label>
                    <input type="number" value="32" style="width: 50px;"  disabled>
                    <label for="">kg</label>                 
                </form>
            </div>
            <div class="card centered" style="width: 35%; margin: 20px;">
                <h2 class="subtitle pink centered ">Toppings</h2>
                <form action="">
                    <label>Salsa MilkyWay</label>
                    <input type="number" value="27" style="width: 50px;"  disabled>
                    <label for=""> lts</label>
                    <br>
                    <label>Salsa Kinder</label>
                    <input type="number" value="10" style="width: 50px;"  disabled>
                    <label for=""> lts</label>
                    <br>
                    <label>Snickers</label>
                    <input type="number" value="20" style="width: 50px;"  disabled>
                    <label for=""> kg</label>
                    <br>
                    <label>Brownies</label>
                    <input type="number" value="23" style="width: 50px;"  disabled>
                    <label for=""> kg</label>
                    <br>
                    <label>M&Ms</label>
                    <input type="number" value="10" style="width: 50px;"  disabled>
                    <label for=""> kg</label>                   
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