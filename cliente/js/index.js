const verificarDNI = (dni) => {

    // Parto el DNI en numero(primero hay que parsearlo) y letra
    const numero = parseInt((dni.slice(0, -1)));
    const letra = dni.slice(-1).toUpperCase();

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
    
    // Calculo la letra que deberia tener el DNI
    const getRest = numero % 23;
    const letraDNI = letras[getRest];
    
    // Compruebo si la letra es la correspondiente
    if (letra === letraDNI) {
        return 'Letra correcta';
    } else {
        return 'Letra incorrecta.';
    }

}

    document.getElementById('formulario').addEventListener('submit', (event) => {
       event.preventDefault();

        const dni = document.getElementById('dni').value;
        const verificado = verificarDNI(dni);

        document.getElementById("verificar").textContent = verificado;
    });



