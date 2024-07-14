function calcularIMC(event){
    event.preventDefault

    const resultado = document.getElementById("resultado");
    const peso =parseFloat(document.getElementById("peso").value);
    const altura =parseFloat(document.getElementById("altura").value);

    let IMC = parseFloat(peso) / parseFloat(altura) * parseFloat(altura) ;
    
    document.textContent= `Su IMC es de ${calcularIMC}`

}



function enviarSolicitud(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    const copia = document.getElementById('copia').value;


    if (copia === 'si') {
        resultado = `Se enviará una copia de la solicitud a su correo electrónico`;
    }
    document.getElementById('resultado') = resultado;
}

