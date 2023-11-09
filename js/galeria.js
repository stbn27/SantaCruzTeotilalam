const imagenes = document.querySelectorAll('.section_galeria');
const bntIzquierda = document.getElementById('left');
const bntDerecha = document.getElementById('right');
const contenedorImagen = document.querySelector('.contenedor_imagen');
const cerrarVentana = document.getElementById('cerrar_ventanaImg');
const vistaImagen = document.querySelector('.vista_individual');

const descargarImagenBtn = document.querySelector('.descargar_imagen')

var indiceImagenActual = 0;
var imagenActual = null;


// imagenes.forEach(function (imagen) {
//     imagen.addEventListener('click', function (event) {
//         // Obtener la imagen exacta sobre la que se hizo clic
//         var imagenClickeada = event.target;

//         var src = imagenClickeada.getAttribute('src');


//         var nombreArchivo = src.substring(src.lastIndexOf('/') + 1);

//         contenedorImagen.setAttribute('src', src);

//         // Establecer el href y el nombre del archivo para la descarga
//         descargarImagenBtn.setAttribute('href', src);
//         descargarImagenBtn.setAttribute('download', nombreArchivo);


//         // Mostrar la vista individual
//         vistaImagen.style.display = 'flex';
//     });
// });

imagenes.forEach(function (imagen) {
    imagen.addEventListener('click', function (event) {
        var imagenClickeada = event.target;
        imagenActual = imagenClickeada;
        console.log(imagenActual);

        var src = imagenClickeada.getAttribute('src');
        var nombreArchivo = src.substring(src.lastIndexOf('/') + 1);

        contenedorImagen.setAttribute('src', src);
        descargarImagenBtn.setAttribute('href', src);
        descargarImagenBtn.setAttribute('download', nombreArchivo);

        vistaImagen.style.display = 'flex';
    });
});


bntIzquierda.addEventListener('click', function () {
    var imagenAnterior = imagenActual.previousElementSibling;
    if (imagenAnterior) {
        imagenActual = imagenAnterior;
        actualizarImagen();
    }
});

bntDerecha.addEventListener('click', function () {
    var imagenSiguiente = imagenActual.nextElementSibling;
    if (imagenSiguiente) {
        imagenActual = imagenSiguiente;
        actualizarImagen();
    }
});


function actualizarImagen() {
    var src = imagenActual.getAttribute('src');
    var nombreArchivo = src.substring(src.lastIndexOf('/') + 1);

    contenedorImagen.setAttribute('src', src);
    descargarImagenBtn.setAttribute('href', src);
    descargarImagenBtn.setAttribute('download', nombreArchivo);
}



cerrarVentana.addEventListener("click", function () {
    vistaImagen.style.display = "none";
});

