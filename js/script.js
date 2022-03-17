
class Automovil {
    constructor(marca, modelo, version, anyo, precio, kilometraje, motor, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anyo = anyo;
        this.precio = precio;
        this.kilometraje = kilometraje;
        this.motor = motor;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("Ferrari Testarossa", "4", "Touring", 1984, 394047486, 65800, 2000, "Italia", "img/testarossa.jpg");
let auto2 = new Automovil("Ferrari F40", "4", "Prime", 1987, 6356143102, 12650, 2000, "Italia", "img/f40.jpg");
let auto3 = new Automovil("Ferrari Dino 246", "4", "Touring", 1968, 1186480045, 22090, 4000, "Italia", "img/246.jpg");
let auto4 = new Automovil("Ferrari LaFerrari", "4", "Touring", 1939, 5508210532, 22090, 2000, "Italia", "img/laferra.jpg");
let auto5 = new Automovil("BMW Serie 4 Coupé", "Corolla", "Seg", 2017, 207900000, 10090, 2000, "Alemania", "img/bmw.jpg");

function mostrarVehiculo(auto) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "style-contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-style");
    contenedorImg.appendChild(imgAuto);

    let valorAuto = document.createElement("label");
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.precio);
    
    
    let textoValorAuto = document.createTextNode("$" + precioFormat);
    valorAuto.appendChild(textoValorAuto);
    valorAuto.setAttribute("class", "style-precio");
    contenedorImg.appendChild(valorAuto);

    let descripcionVehiculo = document.createElement("label");
    let textoDescripcionVehiculo = document.createTextNode(auto.marca + " " + auto.version);
    descripcionVehiculo.appendChild(textoDescripcionVehiculo);
    descripcionVehiculo.setAttribute("class", "style-descripcion");
    contenedorImg.appendChild(descripcionVehiculo);

    let anyoVehiculo = document.createElement("label");
    let textoAnyoVehiculo = document.createTextNode(auto.anyo);
    anyoVehiculo.appendChild(textoAnyoVehiculo);

    
    let kilometrajeVehiculo = document.createElement("label");
    let textoKilometrajeVehiculo = document.createTextNode(auto.anyo + " - " + auto.kilometraje + "km" + " - " + auto.ciudad);
    kilometrajeVehiculo.appendChild(textoKilometrajeVehiculo);
    kilometrajeVehiculo.setAttribute("class", "style-kilometraje");
    contenedorImg.appendChild(kilometrajeVehiculo);
    
    anyoVehiculo.setAttribute("class", "style-anyo");
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Ferrari 4") {
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto2);
            mostrarVehiculo(auto3);
            mostrarVehiculo(auto4);
        }
        else if (busqueda == "BMW") {
            mostrarVehiculo(auto5);
        }
        else {
        this.alert("No se han encontrado coincidencias.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}
