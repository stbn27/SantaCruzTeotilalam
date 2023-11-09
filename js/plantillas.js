

function cargarContenido(archivo, contenedor, elemento) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var contenido = new DOMParser().parseFromString(this.responseText, 'text/html');
            var elementoCargado = contenido.querySelector(elemento);
            document.querySelector(contenedor).appendChild(elementoCargado);
        }
    };
    xhttp.open("GET", archivo, true);
    xhttp.send();
}


