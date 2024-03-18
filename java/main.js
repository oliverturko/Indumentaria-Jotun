alert("Bienvenido a Indumentaria Jotun");
let nombre = prompt("Ingrese su nombre");
const productos = [
  {
      nombre: "Remera",
      precio: 1500,
      id:1,
  },
  {
      nombre: "Pantalon",
      precio: 3000,
      id:2,
  },
  {
      nombre: "Short",
      precio: 2000,
      id:3,
  }
]
function seleccionProducto() {
  const codigoProductoSeleccionado = parseFloat(prompt("Hola "+ nombre + "!!" + "\nSeleccione que clase de prenda quiere comprar: \n1.Remera \n2.Pantalon \n3.Short"));
  const productoSeleccionado = productos.find(producto => {
    return producto.id === codigoProductoSeleccionado;
  })
  if (!productoSeleccionado) return null;
  return productoSeleccionado;
}

function pedirCantidad (precio) {
  const cantidad = parseFloat(prompt("Cuantas unidades?")) // Ingrese la cantidad
  const resultado = validarYCalcular(cantidad, precio);
  return {cantidad,preciototal:resultado};
}

function validarYCalcular(cantidad, precio){
  let res = 0;
    if(!isNaN(cantidad)){
      res=precio*cantidad;
      return res;
    }
    else{
    return "Ingrese un numero";
  }
}

function mostrarTotalDeCompra (total) {
   alert('El total de la compra $' + total);
}

function seleccionarYMostrarListadoProductos () {
  let deseaContinuarCompra = 'NO';
  const productosEnLaCompra = [];
  do {
    const producto = seleccionProducto();
    if (producto) {
      const productoAComprar = {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 0,
        id: producto.id
      }
      const resultado = pedirCantidad(productoAComprar.precio);
      if (typeof resultado.preciototal === 'string') {
        alert('cantidad invalida');
      }
      else {
        productoAComprar.cantidad = resultado.cantidad;
        productoAComprar.precio = resultado.preciototal;
        productosEnLaCompra.push(productoAComprar);
      }
    } else {
      alert('productoInvalido');
    }

    deseaContinuarCompra = prompt("Desea continuar comprando? (SI/NO)")
    console.log(deseaContinuarCompra)
  } while (deseaContinuarCompra.toUpperCase() === 'SI');
  return productosEnLaCompra;
}

function clickbtn () {
  const carro = seleccionarYMostrarListadoProductos();
  if (carro.length === 0) {
    alert('El carro esta vacio')
    return;
  }
  let totalCarro = 0;
  let resumenDeCompra = '';
  carro.forEach((elementoDelCarro) => {
    totalCarro += elementoDelCarro.precio;
    resumenDeCompra += '\n\n Nombre del producto ' + elementoDelCarro.nombre;
    resumenDeCompra += '\n Cantidad ' + elementoDelCarro.cantidad;
    resumenDeCompra += '\n Precio ' + elementoDelCarro.precio;

    })
    alert(resumenDeCompra)
   mostrarTotalDeCompra(totalCarro);}