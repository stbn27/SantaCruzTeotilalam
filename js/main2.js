const btnMenu = document.getElementById('btn-menu');
const contenedorLinksMobile = document.querySelector('.links');
const links = document.querySelector('.contendor_links');
const contenedor_links = document.querySelector('.nav_links');


btnMenu.addEventListener('click', () => {
    contenedorLinksMobile.classList.toggle('mostrar_menu');
    links.classList.toggle('active');
});

contenedorLinksMobile.addEventListener('click', () => {
    contenedorLinksMobile.classList.toggle('mostrar_menu');
    links.classList.toggle('active');
});

const enlaces = () => {
    if (window.innerWidth >= 830) {
        contenedor_links.appendChild(links);
    } else {
        contenedorLinksMobile.appendChild(links);
    }
}


window.addEventListener("resize", enlaces);
window.addEventListener("load", enlaces);