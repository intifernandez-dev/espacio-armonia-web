document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    var form = event.target;

    // Recoger los datos del formulario
    var formData = new FormData(form);
    
    // Simulación del envío de correo (mostrar alerta)
    alert("¡Mensaje enviado! (esto es una simulación)");

    // Mostrar los datos del formulario en la consola (para verificar que se están recolectando bien)
    console.log("Datos del formulario:");
    formData.forEach((value, key) => {
        console.log(key + ": " + value);
    });

    // Aquí es donde puedes hacer la llamada a la API real más tarde cuando todo funcione
    // emailjs.sendForm('service_6nc06nr', 'template_8s6f8m5', formData, 'ItafswbXqBrvQ-ElK')
    //     .then(function(response) {
    //         console.log('Éxito:', response);
    //         alert("¡Mensaje enviado con éxito!");
    //     }, function(error) {
    //         console.log('Error:', error);
    //         alert("Hubo un error al enviar el mensaje.");
    //     });
});



