function Login() {
    // Obtener los valores de las cajas de texto
    const docUsuario = document.getElementById('Usuario').value;
    const contraUsuario = document.getElementById('Contraseña').value;

    // Validar que los campos no estén vacíos
    if (!docUsuario) {
        mostrarAlerta("Por favor, ingresa tu documento.");
        return; // Detener la ejecución si el campo de documento está vacío
    }
    
    if (!contraUsuario) {
        mostrarAlerta("Por favor, ingresa tu contraseña.");
        return; // Detener la ejecución si el campo de contraseña está vacío
    }

    function mostrarAlerta(mensaje) {
        alert(mensaje);
    }

    // URL de la API
    const url = 'http://localhost:8080/api/usuario/auth';

    // Datos a enviar en la solicitud
    const data = {
        documentousuario: docUsuario,
        contraseñausuario: contraUsuario
    };

    // Realizar la solicitud fetch
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            if(response.status === 400){
                alert("Error 400: La solicitud es incorrecta");
            } else if (response.status === 200) {
                alert("Éxito 200: La solicitud fue exitosa");
            }
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        alert("Funcionó: " + data);
        window.location.href = 'Dashboard.html';
    })
    .catch(error => {
        console.error('Hubo un problema con la petición fetch:', error);
    });
}
