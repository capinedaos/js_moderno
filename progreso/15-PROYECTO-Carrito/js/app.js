// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaCursos = document.querySelector("#lista-cursos");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  // cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);

  // elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  // vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    // reseteamos el arreglo
    articulosCarrito = [];
    // eliminamos todo el HTML
    limpiarHTML();
  });
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// Elimina el curso del carrito
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");
    // Elimina del arreglo por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
    // Volvemos a iterar sobre el carrito y mostramos su HTML
    carritoHTML();
  }
}

// Lee el contenido del HTML al que le dimos click y extraemos la info del curso
function leerDatosCurso(curso) {
  //   console.log(curso);

  //   Crear un objeto con el contenido del curso actual
  const inforCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === inforCurso.id);
  if (existe) {
    // Actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === inforCurso.id) {
        curso.cantidad++;
        // retorna el objeto actualizado
        return curso;
      } else {
        // retorna los objetos no duplicados
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    // Agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, inforCurso];
  }

  console.log(articulosCarrito);
  carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {
  // Limpiar el HTML
  limpiarHTML();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
         <td>  
              <img src="${imagen}" width=100>
         </td>
         <td>${titulo}</td>
         <td>${precio}</td>
         <td>${cantidad} </td>
         <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
         </td>
    `;
    // Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

// Elimina los cursos del tbody
function limpiarHTML() {
  // Forma lenta
  // contenedorCarrito.innerHTML = "";

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
