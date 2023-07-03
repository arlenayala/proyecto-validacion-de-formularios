export function valida (input) {
const tipoDeInput=input.dataset.tipo;
if(validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
}
}


const validadores = {
    nacimiento: input=>validarNacimiento(input)
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