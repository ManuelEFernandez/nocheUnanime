const arribaCarrito = document.getElementById("arriba-carrito");
const totalCarro = document.getElementById("total-carro");
const productoModal = document.getElementById("product-modal");

const renderCartProduct = (producto) => {
  const { id, name, precio, img, quantity } = producto;

  return `
<div class="producto-compra">
<div class="imagen-precio">
  <img src="${img}" class= "item-catalogo item-compra" alt="">
   <div class="libro-precio libro-precio-carrito">
      <i class="fa-solid fa-plus boton-anadir sumar-carrito botones-compra" data-id=${id}  data-img ="${img}" data-precio ="${precio}"></i>
      <span class="quantity">${producto.quantity}</span>
      <span class="precio-compra">$${precio * producto.quantity}</span>
      <i class="fa-solid fa-minus boton-anadir botones-compra" data-id =${id} d data-img ="${img}" data-precio ="${precio}""></i>
      
      </div>
      
   </div>
  </div>`;
};

const mostrarModalProducto = () => {
  productoModal.classList.add("modal-activo");
  productoModal.textContent = "Producto agregado exitosamente al carrito";
  setTimeout(() => {
    productoModal.classList.remove("modal-activo");
  }, 1500);
};

const renderCart = () => {
  if (!cart.length) {
    arribaCarrito.innerHTML = `<div class="carrito-vacio">No tenés compras en tu carrito</div>`;
    return;
  }


  arribaCarrito.innerHTML = cart.map(renderCartProduct);
};

const totalCompras = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.precio) * Number(cur.quantity),
    0
  );
};

const mostrarTotal = () => {
  if (!cart.length) {
    totalCarro.innerHTML = `$0`;
    return;
  }

  totalCarro.innerHTML = `$${totalCompras()}`;
};

const refrescarCarrito = () => {
  guardarLocalStorage(cart);
  renderCart(cart);
  mostrarTotal(cart);
  disableBtns(botonComprar);
  disableBtns(botonVaciarCarrito);
};

const productData = (id, name, precio, img) => {
  return { id, name, precio, img };
};

const hayProductoCarrito = (producto) => {
  return cart.find((product) => product.id === producto.id);
};

const sumarUnidadProducto = (producto) => {
  return (cart = cart.map((productoCarrito) => {
    return productoCarrito.id === producto.id
      ? { ...productoCarrito, quantity: productoCarrito.quantity + 1 }
      : productoCarrito;
  }));
};

const crearProductoCarrito = (producto) => {
  cart = [...cart, { ...producto, quantity: 1 }];
};

const addProduct = (e) => {
  if (!e.target.classList.contains("sumar-carrito")) {
   
    return;
  }

  mostrarModalProducto();
  const { id, name, precio, img } = e.target.dataset;
  let producto = productData(id, name, precio, img);

  if (hayProductoCarrito(producto)) {
  
    sumarUnidadProducto(producto);
  } else {
    crearProductoCarrito(producto);
  }

  refrescarCarrito();
};

const sumarUnidadCarrito = (producto) => {
  cart = cart.map((product) => {
    return product.id === producto.id
      ? { ...producto, quantity: producto.quantity + 1 }
      : producto;
  });
};

const restarUnidadCarrito = (producto) => {
  cart = cart.map((product) => {
    return product.id === producto.id
      ? { ...producto, quantity: producto.quantity - 1 }
      : producto;
  });
};

const sacarProductoCarrito = (producto) => {
  cart = cart.filter((product) => product.id !== producto.id);
  refrescarCarrito();
};

const restarCantidadCarrito = (id) => {
  let productoCarrito = cart.find((product) => product.id === id);

  if (productoCarrito.quantity === 1) {
    if (window.confirm("¿Desea quitar el producto del carrito?")) {
      sacarProductoCarrito(productoCarrito);
    }

    return;
  }

  restarUnidadCarrito(productoCarrito);
};

const sumarCantidadCarrito = (id) => {
  let productoCarrito = cart.find((product) => product.id === id);
  sumarUnidadCarrito(productoCarrito);
};

const cambiarCantidad = (e) => {
  if (e.target.classList.contains("fa-plus")) {
 
    sumarCantidadCarrito(e.target.dataset.id);
  } else if (e.target.classList.contains("fa-minus")) {
    restarCantidadCarrito(e.target.dataset.id);
  } else {
   
  }
  refrescarCarrito();
};

const terminarCompra = () => {
  if (!cart.length) return;

  if (window.confirm("¿Desea continuar con su compra?")) {
    cart = [];
    refrescarCarrito();
    alert("La compra se ha realizado satisfactoriamente");
  }
};

const borrarCarrito = () => {
  if (!cart.length) return;
  if (window.confirm("¿Desea vaciar el carrito?")) {
    cart = [];
    refrescarCarrito();
    alert("No hay productos en el carrito");
  }
};
