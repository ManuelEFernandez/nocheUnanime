const menuH = document.getElementById("menuH");
const ulHeader = document.getElementById("ul-header");
const liHeader = document.querySelectorAll(".li-header");
let liHeaders = [...liHeader];
const carritoCompra = document.getElementById("carrito-compra");
const menuCompras = document.getElementById("menu-compras");
const overlay = document.getElementById("overlay");

const toggleMenu = () => {
  ulHeader.classList.toggle("show-menuh");

  liHeaders.map((header) => header.classList.toggle("show-menuh-li"));

  if (menuCompras.classList.contains("mostrar-compras")) {
    menuCompras.classList.remove("mostrar-compras");
  }
  cerrarInfoLibro();
};

const toggleCarrito = () => {
  menuCompras.classList.toggle("mostrar-compras");

  if (ulHeader.classList.contains("show-menuh")) {
    ulHeader.classList.remove("show-menuh");
    liHeaders.map((header) => header.classList.remove("show-menuh-li"));
  }
  cerrarInfoLibro();
};

menuH.addEventListener("click", toggleMenu);
carritoCompra.addEventListener("click", toggleCarrito);

const cerrarConMovimiento = () => {
  if (ulHeader.classList.contains("show-menuh")) {
    {
      ulHeader.classList.remove("show-menuh");
      liHeaders.map((header) => header.classList.remove("show-menuh-li"));
    }
  }
};

window.addEventListener("resize", cerrarConMovimiento);
