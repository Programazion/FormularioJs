console.log("loading Javascript");


function sendForm(){
    console.log("Envio Formulario")

    let nameInfo = document.getElementById("nombre");
    let emailInfo = document.getElementById("correo");
    let valueDolarInfo = document.getElementById("dolar");

    nameInfo = nameInfo.value
    emailInfo = emailInfo.value
    valueDolarInfo = valueDolarInfo.value;


    let personalInfo = {
        name: nameInfo,
        email: emailInfo,
        valuePeso: valueDolarInfo * 4487

    }
    console.log(personalInfo);

    alert("Se guardó el formulario con: nombre: " + personalInfo.name + " email: " + personalInfo.email);

    alert("Precio Dolar: " + valueDolarInfo + " Precio Peso Col: "+ personalInfo.valuePeso)

    window.location.href= "https://github.com/Programazion";
}


let bF1 = document.getElementById('BotonFormulario');

console.log(bF1);

bF1.addEventListener('click', sendForm);

let b2 = document.getElementById('formulario');

console.log(b2);

b2.addEventListener('click', sendForm);