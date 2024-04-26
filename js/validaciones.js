function validarFormulario() {
    let nombre = document.forms["formularioContacto"]["nombre"].value;
    if (nombre == "") {
        alert("El nombre es obligatorio.");
        return false;
    }
    // Agrega validaciones adicionales aquí
}
