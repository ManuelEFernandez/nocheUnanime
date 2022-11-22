const arribaCarrito = document.getElementById("arriba-carrito");
const totalCarro = document.getElementById("total-carro");

const renderCartProduct = (producto) => {

const {id, name, precio, img, quantity} = producto;


return `
<div class="producto-compra">
<div class="imagen-precio">
  <img src="${img}" class= "item-catalogo item-compra" alt="">
   <div class="libro-precio libro-precio-carrito">
      <i class="fa-solid fa-plus boton-anadir data-id=${id}"></i>
      <span>${quantity}</span>
      <span>${precio}</span>
      <i class="fa-solid fa-minus boton-anadir data-id=${id}"></i>
      
      </div>
      
   </div>
  </div>`


}

const renderCart = () => {

    if(!cart.length) {

        arribaCarrito.innerHTML = `<div class="carrito-vacio">No tenés compras en tu carrito</div>`
        return;
    }
   
    arribaCarrito.innerHTML = cart.map(renderCartProduct);
}

const totalCompras = () => {

    cart.reduce((acc, cur) => {

        acc + Number(cur.precio) * Number(cur.quantity)
    }, 0)
}

const mostrarTotal = () => {

    if (!cart.length) {

        totalCarro.innerHTML = `$0`
        return;
    }

    totalCarro.innerHTML = `$${totalCompras()}`
    }
    

