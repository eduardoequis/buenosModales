// Variables básicas para manipular el DOM

let modal = document.getElementById("modal");
let fondoModal = document.getElementById("fondoModal");
let botonAbrirModal = document.getElementById("abrirModal");
let botonCerrarModal = document.getElementById("cerrarModal");

// Acá tenemos que agregar eventos que se ejecuten con el clic.

botonAbrirModal.addEventListener ("click", function(){
    modal.classList.toggle("cerrado");
   fondoModal.classList.toggle("cerrado");
})

botonCerrarModal.addEventListener ("click", function(){
    modal.classList.toggle("cerrado");
   fondoModal.classList.toggle("cerrado");
})

fondoModal.addEventListener ("click", function(){
    modal.classList.toggle("cerrado");
   fondoModal.classList.toggle("cerrado");
})

