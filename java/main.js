
const productos = [
  {
      nombre: "Remera Slipknot",
      precio: 1500,
      img: "./img/slipknot1.jpg",
      cant: 0,
      id:1,
  },
  {
      nombre: "Short Megadeth",
      precio: 3000,
      img: "./img/megadeth1.webp",
      cant: 0,
      id:2,
  },
  {
      nombre: "Short Rammstein",
      precio: 2000,
      img: "./img/rammstein1.webp",
      cant: 0,
      id:3,
  }
]
let carrito = JSON.parse(window.localStorage.getItem('carrito')) ?? [];

const main = () => {
  productos.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto-img" src="${producto.img}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
    `;
    let botonAgregar = document.createElement("button");
    botonAgregar.id = producto.id;
    botonAgregar.classList.add("producto-btn");
    botonAgregar.innerText = "Agregar al carrito";
    botonAgregar.addEventListener("click",() => {
      agregarAlCarrito(producto);
      iniciarElementoCarro();
      calcularTotal();
    });
    div.append(botonAgregar);
    document.getElementById('productos').append(div);
  })
  renderizarCarrito();
}

const calcularTotal = () => {
  const total = carrito.reduce((acumulador, producto) => {
    acumulador += producto.precio * producto.cant;
    return acumulador;
  }, 0);
  const textoTotal = document.getElementById('carrito-total');
  textoTotal.textContent = `Total: $${total}`;
  return total;
}

const iniciarElementoCarro = () => {
  const elementoCarroVacio = document.getElementById('carrito-vacio');
  // Si hay elementos en el carrito agrego la clase d-none, sino la quito. (ternario)
  carrito.length ?
    elementoCarroVacio.classList.add('d-none') :
    elementoCarroVacio.classList.remove('d-none');
}

const renderizarCarrito = () => {
  const contenedorCarro = document.getElementById('carrito-productos');
  contenedorCarro.innerHTML = '';
  carrito.forEach((producto) => {
    crearNuevoProducto(producto);
  })
  iniciarElementoCarro();
  calcularTotal();
}

const agregarAlCarrito = (productoAgregado) =>{
  let producto = carrito.find(producto => producto.id === productoAgregado.id);
  if (producto) {
    producto.cant++;
    const textoProducto = document.getElementById(`producto-carro-${producto.id}`);
    textoProducto.textContent = ` - Producto: ${producto.nombre} Precio: ${producto.precio} Cantidad: ${producto.cant}`;
  } else {
    producto = productoAgregado;
    producto.cant = 1;
    carrito.push(producto);
    crearNuevoProducto(producto);
  }
  window.localStorage.setItem('carrito', JSON.stringify(carrito));
}

const crearNuevoProducto = (producto) => {
  const contenedorProducto = document.createElement('div');
  contenedorProducto.id = `contenedor-producto-carro-${producto.id}`;

  const texto = document.createElement('p');
  texto.id = `producto-carro-${producto.id}`;
  texto.textContent = ` - Producto: ${producto.nombre} Precio: ${producto.precio} Cantidad: ${producto.cant}`;

  botonBorrar = document.createElement('button');
  botonBorrar.id = `boton-eliminar-producto-carro-${producto.id}`;
  botonBorrar.innerText = "Eliminar";
  botonBorrar.addEventListener("click",() => {
    borrarProducto(producto.id);
  })

  contenedorProducto.append(texto);
  contenedorProducto.append(botonBorrar);

  const carritoContenedor = document.getElementById('carrito-productos');
  carritoContenedor.append(contenedorProducto);
}

const borrarProducto = (id) => {
  carrito = carrito.filter(producto => producto.id !== id);
  window.localStorage.setItem('carrito', JSON.stringify(carrito));
  renderizarCarrito();
}

main();