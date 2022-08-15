
let productos = [];
let preciosUnitarios= [];
let cantidadDeProductos = [];
let productosPre = ["Auriculares gamer Logitech G Series G332","Cpu Gamer I7 + 16gb + 1tb + Gt 1030 2gb","Notebook Lenovo IdeaPad 15ITL05 platinum grey 15.6","Access point, Router, Sistema Wi-Fi mesh TP-Link Deco E4"];
let preciosUnitariosPre = ["13556","177432","14399","26699"];
let cantidadDeProductosPre = 1;
let total = 0;
let cantidadDeProducto = 0;

// slider
const slider = document.querySelector("#slider");
let slidersection = document.querySelectorAll(".slider-section");
let slidersectionLast = slidersection[slidersection.length-1];

slider.insertAdjacentElement('afterbegin', slidersectionLast)

function next() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.7s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginleft = "-100%";
    }, 500)
}

function prev() {
    console.log("estoy ahora aca")
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginleft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginleft = "-100%";
    }, 500)

}

// end slider

function canlcular (){
    let total = 0;
    for(let i=0; i<productos.length;i++){
        total = total + (preciosUnitarios[i] * cantidadDeProductos[i]);
        
    }
    return total;
}

function agregarProductoAlCarrito(){
    if (document.getElementById("productoNuevo").value === ""){
        alert("Cargue un Producto")
    }else if (document.getElementById("precioUnitario").value === "" || document.getElementById("precioUnitario").value < 0){
        alert ("Precio Invalido")}else {

            let producto = document.getElementById("productoNuevo").value;
            productos.push(producto);
            let precioUnitario = document.getElementById("precioUnitario").value;
            preciosUnitarios.push(precioUnitario);
            if(document.getElementById("cantidadUnitaria").value === "" || document.getElementById("cantidadUnitaria").value <0){
                cantidadDeProducto = 1;
            }else{
                cantidadDeProducto = document.getElementById("cantidadUnitaria").value;
            }
            cantidadDeProductos.push(cantidadDeProducto);
            let miItem = document.createElement("li");
            miItem.innerHTML = "Producto: " + producto + "  |  Cantidad: " + cantidadDeProducto + "  | Precio Unitario: $" + precioUnitario;
            miLista.appendChild(miItem);
            calcularCompra();
        }
        document.getElementById("productoNuevo").value = "";
        document.getElementById("precioUnitario").value = "";
        document.getElementById("cantidadUnitaria").value = "";
    }

function agregarProductoPrev(){
    i=this.value;
    productos.push(productosPre[i]);
    preciosUnitarios.push(preciosUnitariosPre[i]);
    cantidadDeProductos.push(cantidadDeProductosPre);
    
    let miItem = document.createElement("li");
    miItem.innerHTML = "Producto: " + productosPre[i] + "  |  Cantidad: " + cantidadDeProductosPre + "  | Precio Unitario: $" + preciosUnitariosPre[i];

    miLista.appendChild(miItem);

    calcularCompra();

}

function calcularCompra(){
    divTotal.innerHTML = " ";
    let subtotal=canlcular()
/*     let total = 0;
    for(let i=0; i<productos.length;i++){
        total = total + (preciosUnitarios[i] * cantidadDeProductos[i]);
    } */

    let miSubTotal = document.createElement("h2");
    miSubTotal.innerHTML = "Subtotal de su Compra $" + subtotal;
    divTotal.appendChild(miSubTotal)
 
}

function eliminarUltimo (){
    if (productos.length !== 0){
    productos.pop();
    preciosUnitarios.pop();
    cantidadDeProductos.pop();

    miLista.removeChild(miLista.lastChild);
    calcularCompra()}

}

function eliminarTodo (){
    productos = [];
    preciosUnitarios= [];
    cantidadDeProductos = [];

    miLista.innerHTML = "";
    divTotal.removeChild(divTotal.lastChild)
    
}

function calcularTotal (){
    divTotal.innerHTML = " "
    let total = canlcular();
    
    let miTotal = document.createElement("h2");
    miTotal.innerHTML = "Total de su Compra $" + total;
    divTotal.appendChild(miTotal)
}
// menu ///

let btnMenu = document.getElementById('btn-menu');
let mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
mainNav.classList.toggle('mostrar');
});

// slider
const btnRight = document.querySelector(".slider-btn-right");
btnRight.addEventListener("click", next);

const btnLeft = document.querySelector(".slider-btn-left");
btnLeft.addEventListener("click", prev);

setInterval ( function () {
    next();
}, 5000);
// end slider

let miLista = document.querySelector(".carrito");

let divTotal = document.querySelector(".total");

let btnAgregar = document.getElementById("agregarProducto");
btnAgregar.addEventListener("click",agregarProductoAlCarrito);

let btnIconAddProd = document.querySelectorAll(".product-icon");
btnIconAddProd.forEach(boton => {
    boton.addEventListener("click", agregarProductoPrev);
});

let btnCalcular = document.getElementById("calcularTotal");
btnCalcular.addEventListener("click", calcularTotal);

let btnEliminarUltimo = document.getElementById("eliminarUltimo");
btnEliminarUltimo.addEventListener("click", eliminarUltimo)

let btnVaciarCarrito = document.getElementById("vaciarCarrito");
btnVaciarCarrito.addEventListener("click", eliminarTodo);




