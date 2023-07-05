export function valida (input) {
const tipoDeInput=input.dataset.tipo;
if(validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
}
console.log(input.parentElement)
if (input.validity.valid){

    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML="";
}else {
    input.parentElement.classList.add ("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML= mostrarMensajeDeError(tipoDeInput,input)
}
} 

const tipoDeError = [

    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajeDeError = {
    nombre:{
        valueMissing:"el campo nombre no puede estar vacio"
    },
    email: {
        valueMissing:"el campo correo no puede estar vacio",
        typeMismatch:"el correo no es valido"
    },
    password: {
        valueMissing:"el campo contraseña no puede estar vacio",
        patternMismatch:"Al menos 6 caracteres maximo 12, debe contener una letra minuscula, una letra mayuscula, un numero y  puede contener caracteres especiales"
    },
    nacimiento: {
        valueMissing:"el campo fecha de nacimiento no puede estar vacio",
        customError: "debe tener mas de 18 años"
    },
    numero: {
        valueMissing:"el campo numero de telefono no puede estar vacio",
        patternMismatch:"el formato requerido es xxxxxxxxxx 10 números"
    },
    direccion: {
    valueMissing:"el campo numero de direccion no puede estar vacio",
    patternMismatch:"el formato requerido es xxxxxxxxxx 10 números"
    },
    ciudad: {
        valueMissing:"el campo ciudad no puede estar vacio",
        patternMismatch:"el formato requerido es xxxxxxxxxx 10 números"
    },
    departamento: {
        valueMissing:"el campo departamento no puede estar vacio",
        patternMismatch:"el formato requerido es xxxxxxxxxx 10 números"
    }
}


const validadores = {
    nacimiento: input=>validarNacimiento(input)
}

function mostrarMensajeDeError (tipoDeInput,input) {
   let mensaje=""
    tipoDeError.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput,error);
            console.log(input.validity[error]);
            console.log(mensajeDeError[tipoDeInput][error]);
            mensaje=mensajeDeError[tipoDeInput][error];
        }
    })

  return mensaje
}

function validarNacimiento(input) {
const fechaCliente= new Date(input.value);
let mensaje=""

if(!mayorDeEdad(fechaCliente)){
mensaje="debe tener mas de 18 años"
}

input.setCustomValidity(mensaje);

}

function mayorDeEdad (fechaCliente) {

    const fechaActual= new Date ();
    const diferenciaFechas=new Date (
        fechaCliente.getUTCFullYear()+18,
        fechaCliente.getUTCMonth(),
        fechaCliente.getUTCDate());

    return diferenciaFechas<=fechaActual;

}