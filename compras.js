const arribaCarrito = document.getElementById("arriba-carrito");
const totalCarro = document.getElementById("total-carro");
const productoModal = document.getElementById("product-modal");

const renderCartProduct = (producto) => {

const {id, name, precio, img, quantity} = producto;


return `
<div class="producto-compra">
<div class="imagen-precio">
  <img src="${img}" class= "item-catalogo item-compra" alt="">
   <div class="libro-precio libro-precio-carrito">
      <i class="fa-solid fa-plus boton-anadir botones-compra data-id=${id}"></i>
      <span class="quantity">${quantity}</span>
      <span class="precio-compra">$${precio * producto.quantity}</span>
      <i class="fa-solid fa-minus boton-anadir botones-compra data-id=${id}"></i>
      
      </div>
      
   </div>
  </div>`


}

const mostrarModalProducto = () => {

    productoModal.classList.add("modal-activo");
    productoModal.textContent = "Producto agregado exitosamente";
    setTimeout(() => {
        productoModal.classList.remove("modal-activo")
        

    }, 1500)
}

const renderCart = () => {

    if(!cart.length) {

        arribaCarrito.innerHTML = `<div class="carrito-vacio">No tenés compras en tu carrito</div>`
        return;
    }
    
    console.log(cart);
    arribaCarrito.innerHTML = cart.map(renderCartProduct);
}

const totalCompras = () => {
    
   return cart.reduce((acc, cur) => 
        acc + Number(cur.precio) * Number(cur.quantity)
    , 0)
}

const mostrarTotal = () => {

    if (!cart.length) {

        totalCarro.innerHTML = `$0`
        return;
    }

    totalCarro.innerHTML = `$${totalCompras()}`
    }

    

const productData = (id, name, precio, img) => {

    return {id, name, precio, img};
}

    const hayProductoCarrito = (producto) => {
        
   return cart.find((product) => product.id === producto.id)
    };

    const sumarUnidadProducto = (producto) => {

     return cart = cart.map((productoCarrito) => {

           return productoCarrito.id === producto.id ? {...productoCarrito, quantity: productoCarrito.quantity +1 } : productoCarrito;
        })
    }

    const crearProductoCarrito = (producto) => {

        cart = [...cart, {...producto, quantity: 1}]
    }

    const addProduct = (e) => {

        if (!e.target.classList.contains("sumar-carrito")) {
            
            console.log("hola");
            return;
        };

        mostrarModalProducto();
        const {id, name, precio, img} = e.target.dataset;
        let producto = productData(id, name, precio, img)


        if(hayProductoCarrito(producto)) {
            console.log("holaaa");
            sumarUnidadProducto(producto)
            
        }

        else {

            crearProductoCarrito(producto)
        }

        guardarLocalStorage(cart);
        renderCart(cart);
        mostrarTotal(cart);
        disableBtns(botonComprar);
        disableBtns(botonVaciarCarrito);
    }





