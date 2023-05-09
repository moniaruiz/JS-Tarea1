//Ejercicio 1:

function piramide_numerica(numeros){
    for(let i = 0; i <= numeros; i++){
        let fila = " ";
        for(let j = 1; j <= i ; j++){
             fila = fila + j;
        }
        console.log(fila);
    }
}
piramide_numerica(6);
piramide_numerica(3);


//Ejercicio 2:

const array1 = ["rojo", "azul", "amarillo", 34, 11];
const array2 = ["blanco", "negro", "rojo", 34];
const array3 = [];

function coincidir(array1, array2){

    for(let i = 0; i < array1.length; i++){

        for(let j = 0; j < array2.length; j++){

            if(array1[i] === array2[j]){
                array3.push(array1[i]);
                
            }
        }
        
    }
    return array3;
}

console.log(coincidir(array1, array2));


//Ejercicio 3:

class Producto {
    constructor(nombre, precio, unidades){
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }
}

class Carrito {
    constructor(){
        this.montoTotal = 0;
        this.productos = [];
        
    }

    agregarProducto(nombre, precio, unidades){
        const productoExiste = this.productos.includes(nombre);
        if (productoExiste){
            console.log("Ya existe el producto " + nombre + " con " + unidades + " unidades.");
            return;
        }else{
            const producto = new Producto (nombre, precio, unidades);
            this.productos.push(producto.nombre);
            this.montoTotal += precio * unidades;
        }
    
    }
}

const carrito = new Carrito();

carrito.agregarProducto("Leche" , 10, 1);
console.log("Monto Total: $" +carrito.montoTotal+", Productos: [" +carrito.productos+ "]");

carrito.agregarProducto("Azucar", 5, 2);
console.log("Monto Total: $" +carrito.montoTotal+", Productos: [" +carrito.productos+ "]");

carrito.agregarProducto("Leche", 10, 1);
carrito.agregarProducto("Azucar", 5, 2);
