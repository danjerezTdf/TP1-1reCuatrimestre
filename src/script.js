let productos = [];
let preciosUnitarios= [];
let cantidadDeProductos = [];
let total = 0;

function canlcular (){
    let total = 0;
    for(let i=0; i<productos.length;i++){
        total = total + (preciosUnitarios[i] * cantidadDeProductos[i]);
    }
    return total;
}

function agregarProductoAlCarrito(){

    let producto = document.getElementById("productoNuevo").value;
    productos.push(producto);
    let precioUnitario = document.getElementById("precioUnitario").value;
    preciosUnitarios.push(precioUnitario);
    let cantidadDeProducto = document.getElementById("cantidadUnitaria").value;
    cantidadDeProductos.push(cantidadDeProducto);

    let miItem = document.createElement("li");
    miItem.innerHTML = "Producto: " + producto + "  |  Cantidad: " + cantidadDeProducto + "  | Precio Unitario: $" + precioUnitario;


    //miItem.classList.add("colorVerde");

    miLista.appendChild(miItem);
    calcularCompra();

    document.getElementById("productoNuevo").value = "";
    document.getElementById("precioUnitario").value = "";
    document.getElementById("cantidadUnitaria").value = "";

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


let miLista = document.querySelector(".carrito");

let divTotal = document.querySelector(".total");

let btnAgregar = document.getElementById("agregarProducto");
btnAgregar.addEventListener("click",agregarProductoAlCarrito);

let btnCalcular = document.getElementById("calcularTotal");
btnCalcular.addEventListener("click", calcularTotal);

let btnEliminarUltimo = document.getElementById("eliminarUltimo");
btnEliminarUltimo.addEventListener("click", eliminarUltimo)

let btnVaciarCarrito = document.getElementById("vaciarCarrito");
btnVaciarCarrito.addEventListener("click", eliminarTodo);




