// scripts.js
/*$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000
    });
});*/

document.querySelector("header").innerHTML = `
<div><img src="./imagenes/logo.jpg" alt="Logo del Restaurante"></div>
<nav>
    <ul style="list-style-type: none;">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="comidas.html">Comidas</a></li>
        <li><a href="bebidas.html">Bebidas</a></li>
        <li><a href="contacto.html">Contacto</a></li>
        <li><a href="pedidos.html">Pedidos</a></li>
        <li><a href="index.html #Nosotros">Acerca de</a></li>
    </ul>
</nav>
<div>Teléfono: +1 234 567 8900</div>
`

/*document.querySelector("header").innerHTML=`
<h1>Equipo 4</h1>
            <nav>
                <a href="index.html">Home</a>
                <a href="registro.html">Registro</a>
                <a href="sucursales.html">Sucursales</a>
                <a href="acercade.html">Acerca de</a>
            </nav>
`*/
document.querySelector("footer").innerHTML=`
<br>
<p>&copy; 2024 Restaurante. Todos los derechos reservados.</p>
<a href="index.html">Inicio</a>
<br>
`