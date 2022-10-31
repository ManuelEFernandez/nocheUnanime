const catalogo = document.getElementById("catalogo-libros");
const mostrarTodos = document.querySelector(".mostrar-todos")
const mostrarNarrativa = document.querySelector(".mostrar-narrativa");
const mostrarEnsayos = document.querySelector(".mostrar-ensayo");
const mostrarExotopias = document.querySelector(".mostrar-exotopias");
const botonesMostrar = document.querySelectorAll(".boton-mostrar");
const todosBotonesMostrar = document.querySelector(".botones-mostrar");
const autoresLista =  document.querySelector(".lista-autores");
const botonCarga = document.getElementById("boton-carga");
const cajaInfoLibros = document.getElementById("caja-info-libros");

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const guardarLocalStorage = (listaCarro) => {

    localStorage.setItem("cart", JSON.stringify(listaCarro))

  };

  const dividirProductos = (size, array) => {

    console.log(array.length);

   

    for (let index = 0; index < array.length; index += size) {
      
      let productosDivididos = [];
      for (let i = 0; i < array.length; i += size)
        productosDivididos.push(array.slice(i, i + size));
      return productosDivididos;
    }
  }

  const controladorProductos = {


    productosDivididos: dividirProductos(20, arrayCatalogoLibros),
    proximoIndex: 1,
    limiteProductos: dividirProductos(20, arrayCatalogoLibros).length


  }

  console.log(controladorProductos.productosDivididos);




 
  
  
  const renderizarLibro = (articulo) => {
        

      
        const {id, titulo, precio, paginas, coleccion, autor, año, img} = articulo; 
        
        return `<div class="imagen-precio">
            <img src="${img}" class= "item-catalogo" id="id-libro-${id}" alt="${titulo}">
             <div class="libro-precio">
             <button class="boton-anadir" data-id ="${id}" data-titulo ="${titulo}" data-autor ="${autor}" data-img ="${img} data-precio ="${precio}""><i class="fa-solid fa-plus"></i></button>
                <span class="precio-libro">$${precio}</span>
             </div>
        </div>`}


        const renderizarLibros = (index = 0, coleccion) => {
          

          let todosAutores = document.querySelectorAll(".autor-lista");

          todosAutores.forEach((autor) => autor.classList.remove("autor-activo"));
          if (!coleccion) {

            
          catalogo.innerHTML += controladorProductos.productosDivididos[index]
          .map(renderizarLibro)
          .join('');


          infoLibro();
          // controladorProductos.productosDivididos[index].forEach((producto) => {

            
          //   let infoProducto = document.getElementById(`id-libro-${producto.id}`);
          //   infoProducto.addEventListener("click", function(){renderizarInfoLibro(producto)})
          // })

        }


        else {

          let productosFiltrados = arrayCatalogoLibros.filter((libros) => libros.coleccion === coleccion)

       

          let productosFiltradosDivididos = dividirProductos(20, productosFiltrados);

          catalogo.innerHTML += productosFiltradosDivididos[index].map(renderizarLibro).join("");
          infoLibro();

          // productosFiltradosDivididos[index].forEach((producto) => {

          //   console.log(producto.id)
          //   let infoProducto = document.getElementById(`id-libro-${producto.id}`);
          //   infoProducto.addEventListener("click", function(){renderizarInfoLibro(producto)})
          // })
        }
       
        
        };

  const mostrarLibros = (opcion) => {

   
    if (opcion === "Mostrar todos") {
      catalogo.innerHTML = "";

      botonCarga.classList.remove("boton-oculto");
      controladorProductos.proximoIndex = 1; 
        renderizarLibros();
    }

    if (opcion === "Narrativa") {
      botonCarga.classList.add("boton-oculto");
      catalogo.innerHTML = "";
      // let librosNarrativa = arrayCatalogoLibros.filter((libros) => libros.coleccion === "Narrativa");
      renderizarLibros(0, "Narrativa")

    }

    if (opcion === "Ensayo") {
      botonCarga.classList.add("boton-oculto");
      catalogo.innerHTML = "";
      // let librosEnsayo = arrayCatalogoLibros.filter((libros) => libros.coleccion === "Ensayos");
      renderizarLibros(0, "Ensayos")

    }

    if (opcion === "Exotopias") {
      botonCarga.classList.add("boton-oculto");
      catalogo.innerHTML = "";
      // let librosExotopias = arrayCatalogoLibros.filter((libros) => libros.coleccion === "Exotopías");
      renderizarLibros(0, "Exotopías")

    }


  }


  const infoLibro = () => {

         
    arrayCatalogoLibros.forEach((producto) => {

      if (document.getElementById(`id-libro-${producto.id}`)) {
      let infoProducto = document.getElementById(`id-libro-${producto.id}`);
      infoProducto.addEventListener("click", function(){renderizarInfoLibro(producto)})
    }})
  
  }

mostrarNarrativa.addEventListener("click", function(){mostrarLibros("Narrativa")});
mostrarEnsayos.addEventListener("click", function(){mostrarLibros("Ensayo")});
mostrarExotopias.addEventListener("click", function(){mostrarLibros("Exotopias")});
mostrarTodos.addEventListener("click", function(){mostrarLibros("Mostrar todos")});

const mostrarLibroAutor = (autor) => {

  
  botonCarga.classList.add("boton-oculto");
  mostrarTodos.classList.remove("boton-activo");
  mostrarEnsayos.classList.remove("boton-activo");
  mostrarNarrativa.classList.remove("boton-activo");
  mostrarExotopias.classList.remove("boton-activo");

  let arrayAutores = arrayCatalogoLibros.filter((libro) => libro.autor === autor);
  catalogo.innerHTML = "";
  catalogo.innerHTML += arrayAutores.map(renderizarLibro);
  let todosAutores = document.querySelectorAll(".autor-lista");

  todosAutores.forEach((autor) => autor.classList.remove("autor-activo"));
  let autorSeleccionado = document.getElementById(`li-${autor}`);
  autorSeleccionado.classList.add("autor-activo");
  infoLibro();
}
const renderizarAutores = () => {
  
  
  let listaAutores = [];
  arrayCatalogoLibros.map((libros) => {

    if (!listaAutores.find((elemento) => elemento === libros.autor)) {

      listaAutores.push(libros.autor)
    }

    
  })


  autoresLista.innerHTML += listaAutores.map((autor) => `<li class="autor-lista" id="li-${autor}"> <button class="boton-autor" id="${autor}" value="${autor}">${autor}</button></li>`).join("");

  listaAutores.forEach((autor) => {

    let nuevoAutor = document.getElementById(`${autor}`);
    nuevoAutor.addEventListener("click", function(){mostrarLibroAutor(`${autor}`)})
  })
  
};




const cambiarActiveState = (coleccion) => {

  
  let botonesColecciones = [...botonesMostrar];
  botonesColecciones.forEach((boton) => {
  if(boton.dataset.coleccion !== coleccion) {

   
    boton.classList.remove("boton-activo");
    return;
  }

  else {

    
    boton.classList.add("boton-activo");
  }
})
};

const cambiarFilterState = (e) => {
  
  let coleccionSeleccionada = e.target.dataset.coleccion;
 
  cambiarActiveState(coleccionSeleccionada);
}

const aplicarFiltro = (e) => {

  if(!e.target.classList.contains("boton-mostrar")) {

    return;
  }

  cambiarFilterState(e);

}

const init = () => {
  renderizarLibros();
  renderizarAutores();
  botonCarga.addEventListener("click", mostrarMasProductos);
  todosBotonesMostrar.addEventListener("click", aplicarFiltro);

}

const cambiarEstadoMostrarMas = (category) => {

  if (!category) {

    botonCarga.classList.remove("boton-oculto");

    return;
  }
  else {
  botonCarga.classList.add("boton-oculto")

}


}

const finalLista = () => controladorProductos.proximoIndex === controladorProductos.limiteProductos;

const mostrarMasProductos = () => {

  
  renderizarLibros(controladorProductos.proximoIndex);
  controladorProductos.proximoIndex++;
  

  if (finalLista()) {

    botonCarga.classList.add("boton-oculto");
  }

  infoLibro();
}

const llamarInfoLibro = () => {

  infoLibro();
  let cancelarInfo = document.querySelector(".cancelar-info");
  cancelarInfo.addEventListener("click", cerrarInfoLibro);
};


const cerrarInfoLibro = (id) => {
  cajaInfoLibros.classList.remove("visible");
  console.log("hola");
  llamarInfoLibro();
 



}

const renderizarInfoLibro = (libro) =>  {
 
  console.log("funciono");
  const {id, titulo, precio, paginas, coleccion, autor, año, img} = libro; 
  cajaInfoLibros.innerHTML = `
  <div class="info-libro" id="info-libro${id}">
          <div class="part-izq">
            
            <div class="datos-img">
            <p class="data-arriba">${autor}</p>
            <p class="titulo-info data-arriba">${titulo}</p>
             <img src="${img}" class="img-info">
             </div>
             <div class="mas-data-libro">
             <p class="dato-libro">${año}</p>
             <p class="dato-libro">${coleccion}</p>
             <p class="dato-libro">${paginas} páginas</p>
             <div class="dato-libro dato-precio">
             <i class="fa-solid fa-plus boton-anadir"></i>
             <span class="precio-libro">$${precio}</span>
             </div>
            </div>
            </div>
          <div class="part-der">
            <div class="cancelar-info" id="cancelar-info${id}">X</div>
            <p class="titulo-info">Resumen</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae est, culpa deleniti maiores molestiae quasi quaerat odit, quisquam sit quia, sed aspernatur accusamus amet quae blanditiis. Quidem quo voluptas nulla, sint culpa laborum dolorum explicabo laboriosam quam, labore nihil deserunt minima magnam ab cupiditate! Officia exercitationem rem iure. Quaerat, beatae assumenda quae dolorum maiores nam expedita culpa delectus asperiores distinctio consequuntur natus commodi, consequatur cum? Eum vel rem placeat obcaecati eaque provident error, perspiciatis distinctio odio corporis animi, voluptatem est, accusamus quod unde? Totam distinctio amet nulla, consequuntur impedit ipsa fugiat eum sed itaque nemo ut quos mollitia vel ex exercitationem odio accusantium possimus perferendis! Quia consequatur id saepe aliquid blanditiis tempora, cupiditate quidem sint odit perspiciatis dicta doloribus. Fugit.</p>
          </div>
        </div>
  
  `;
  
  
  cajaInfoLibros.classList.add("visible");
  let cancelarInfo = document.getElementById(`cancelar-info${id}`);
  cancelarInfo.addEventListener("click", function(){cerrarInfoLibro(id)});
  
  
}

init();
