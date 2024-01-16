function marcarSeleccionado(elemento) {
    var itemsNavbar = document.getElementById('navbar').getElementsByTagName('a');

    for (var i = 0; i < itemsNavbar.length; i++) {
        itemsNavbar[i].classList.remove('seleccionado');
    }

    elemento.classList.add('seleccionado');

    // Almacena el ID del elemento seleccionado en el almacenamiento local
    localStorage.setItem('elementoSeleccionado', elemento.id);
}

// Esta función se ejecuta al cargar la página
function cargarSeleccionado() {
    var idElementoSeleccionado = localStorage.getItem('elementoSeleccionado');
    
    if (idElementoSeleccionado) {
        var elementoSeleccionado = document.getElementById(idElementoSeleccionado);
        
        if (elementoSeleccionado) {
            elementoSeleccionado.classList.add('seleccionado');
        }
    }
}

// Llama a cargarSeleccionado cuando la página se carga
window.onload = cargarSeleccionado;
