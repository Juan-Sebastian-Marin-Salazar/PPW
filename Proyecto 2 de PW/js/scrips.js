
document.getElementById("empleo-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    document.getElementById("mensaje-exito").classList.remove("oculto");
    this.reset(); // Limpia los campos después de enviar
});

