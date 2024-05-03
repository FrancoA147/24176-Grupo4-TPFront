function validarFormulario() {
    let nombre = document.forms["formularioContacto"]["nombre"].value;
    if (nombre == "") {
        alert("El nombre es obligatorio.");
        return false;
    }
    // Agrega validaciones adicionales aquí
    let apellido = document.forms["formularioContacto"]["apellido"].value;
    if (apellido == "") {
        alert("El apellido es obligatorio.");
        return false;
    }
    let correo = document.forms["formularioContacto"]["correo"].value;
    if (correo == "") {
        alert("El correo es obligatorio.");
        return false;
    }
    let celular = document.forms["formularioContacto"]["celular"].value;
    if (celular == "") {
        alert("El celular es obligatorio.");
        return false;
    }
    var regex=/^[0-9,+,-]+$/;
    if (!celular.match(regex))
    {
        alert("El celular solo puede tener números, '+' o '-'");
        return false;
    }
}
