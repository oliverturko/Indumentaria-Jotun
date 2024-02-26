alert("Bienvenido a Indumentaria Jotun");
let nombre = prompt("Ingrese su nombre");
const Remera=10;
const Pantalon=15;
const Short=5;

function clickbtn(){
const operacionValida = true;
let prendaSeleccionada;
do {
  let compra = parseFloat(prompt("Hola "+ nombre + "!!" + "\nSeleccione que clase de prenda quiere comprar: \n1.Remera \n2.Pantalon \n3.Short"));
  switch(compra) {
    case 1:
      prendaSeleccionada = Remera;
      break;
    case 2:
      prendaSeleccionada = Pantalon;
      break;
    case 3:
      prendaSeleccionada= Short;
      break;
    default:
      operacionValida = false;
      break;
}
  if(operacionValida) {
   let cantidad = parseFloat(prompt("Cuantas unidades?"))
   const resultado = validarYCalcular(cantidad,prendaSeleccionada)
   if (typeof resultado === 'string')
       alert(resultado);
    else {
      alert("Su compra tiene un monto de $ " + resultado)
    }
  } else {
   alert("Operacion invalida");
  }
} while(!operacionValida);
}

function validarYCalcular(cant, obj){
  let res = 0;
    if(!isNaN(cant)){
        res=obj*cant;
        return res;
    }
    else{
    return "Ingrese un numero";
  }
}