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
        <li><a href="about.html">Acerca de</a></li>
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
<p>2024 Restaurante. Todos los derechos reservados.</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419570.5793678844!2d-58.495246570913416!3d-34.75823392052109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1713925122359!5m2!1ses!2sar" width=25% height=25% style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<p>&copy; 2024 Restaurante. Todos los derechos reservados.</p>
<br>
`