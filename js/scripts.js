$(document).ready(function () {
  $("#contactoForm").submit(function (e) {
    e.preventDefault();
    const nombre = $("#nombre").val().trim();
    const email = $("#email").val().trim();

    if (nombre === "" || email === "") {
      alert("Por favor completa todos los campos.");
    } else if (!email.includes("@")) {
      alert("Ingresa un correo válido.");
    } else {
      alert("Formulario enviado correctamente.");
      $("#contactoForm")[0].reset();
    }
  });
  

  $("#btnEvaluar").click(function () {
    const respuesta = $("#respuesta").val();
    const feedback =
      respuesta === "1"
        ? '<span class="text-success">¡Correcto!</span>'
        : '<span class="text-danger">Respuesta incorrecta.</span>';
    $("#feedback").html(feedback);
  });
});
