let productos = [];
let preciosUnitarios= [];
let cantidadDeProductos = [];
let total = 0;

function agregarProductoAlCarrito(){

    let producto = document.getElementById("productoNuevo").value;
    productos.push(producto);
    let precioUnitario = document.getElementById("precioUnitario").value;
    preciosUnitarios.push(precioUnitario);
    let cantidadDeProducto = document.getElementById("cantidadUnitaria").value;
    cantidadDeProductos.push(cantidadDeProducto);

    console.log (productos);
    console.log (preciosUnitarios);
    console.log (cantidadDeProductos);

    let miItem = document.createElement("li");
    miItem.innerHTML = producto + "  |  " + cantidadDeProducto + "  |  " + precioUnitario;


    //miItem.classList.add("colorVerde");

    miLista.appendChild(miItem);

    document.getElementById("productoNuevo").value = "";
    document.getElementById("precioUnitario").value = "";
    document.getElementById("cantidadUnitaria").value = "";

}

function calcularCompra(){
    for(let i=0; i<productos.length;i++){
        total = total + parseInt((preciosUnitarios[i] * cantidadDeProductos[i]));
    }

    let h2 = document.createElement("h2");
    h2.innerHTML = "Total de su Compra " + total;
    miLista.appendChild(h2);
}

function eliminarUltimo (){
    productos.pop();
    preciosUnitarios.pop();
    cantidadDeProductos.pop();

    miLista.removeChild(miLista.lastChild)
}

function eliminarTodo (){
    productos = [];
    preciosUnitarios= [];
    cantidadDeProductos = [];

    miLista.innerHTML = "";
    
}



let miLista = document.querySelector(".carrito");

let btnAgregar = document.getElementById("agregarProducto");
btnAgregar.addEventListener("click",agregarProductoAlCarrito);

let btnCalcular = document.getElementById("calcularTotal");
btnCalcular.addEventListener("click", calcularCompra);

let btnEliminarUltimo = document.getElementById("eliminarUltimo");
btnEliminarUltimo.addEventListener("click", eliminarUltimo)

let btnVaciarCarrito = document.getElementById("vaciarCarrito");
btnVaciarCarrito.addEventListener("click", eliminarTodo);




