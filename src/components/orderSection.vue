<template>
     <section id="Pedido">
        <h2 class="subtitle pink centered padding-top-subtitle">Realiza tu pedido!</h2>
        <div class="flex-container">
            <div class="card">
                <form action="pedido.js">
                    <label for="Nombre">Ingresa tu nombre:</label>
                    <input type="text" id="Nombre" name="Nombre" placeholder="Nombre"><br>
                    <label for="Telefono">Ingresa tu Número Telefónico:</label>
                    <input type="number" id="Telefono" name="Telefono" placeholder="Telefono"><br>
                    <label for="Email">Ingresa tu Email:</label>
                    <input type="email" id="Email" name="Email" placeholder="correo@ejemplo.com"><br>
                    <label for="Descripcion">Describe tu pastel:</label>
                    <textarea name="Descripcion" id="Descripcion" cols="30" rows="10" placeholder="Ingresa la descripción de la estética de tu pastel :)"></textarea><br>
                    <label for="Sabor">Selecciona el sabor:</label>
                    <select name="Sabor" id="Sabor">
                        <option value="flav1">Cremosa Vainilla</option>
                        <option value="flav2">Chocolate Extreme</option>
                        <option value="flav3">Muchas Leches</option>
                    </select><br>
                    <label for="topping">Selecciona los extras:</label><br>
                    <input type="checkbox" id="adorno1" name="adorno1" value="Crema">
                    <label for="Crema">Salsa MilkyWay</label>
                    <input type="checkbox" id="adorno2" name="adorno2" value="Cerezas">
                    <label for="Crema">Salsa Kinder </label>
                    <input type="checkbox" id="adorno3" name="adorno3" value="ChispasChocolate">
                    <label for="Crema">Snickers </label>
                    <input type="checkbox" id="adorno4" name="adorno4" value="ChispasColores">
                    <label for="Crema">Brownies </label>
                    <input type="checkbox" id="adorno4" name="adorno4" value="ChispasColores">
                    <label for="Crema">M&Ms</label>
                    <br><br>
        
                    <input type="reset">
                    <input type="submit">
                    <br>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: 'order',
}
</script>
