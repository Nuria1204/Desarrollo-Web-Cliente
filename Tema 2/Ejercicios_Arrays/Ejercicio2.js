const numeros = [-4, -2, -8, -1, -3, -6];

let producto = 1;
let mayor = numeros[0];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {

    producto = producto * numeros[i];

    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

    suma = suma + numeros[i];
}

let media = suma / numeros.length;

console.log("Producto:", producto);
console.log("Mayor:", mayor);
console.log("Media:", media);