const tienda = {

    productos: [
        {
            nombre: "Cuaderno",
            precio: 4
        },
        {
            nombre: "Boligrafo",
            precio: 2
        },
        {
            nombre: "Mochila",
            precio: 25
        }
    ],

    calcularTotal: function() {

        let total = 0;

        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }

        return total;
    }
};

console.log(tienda.calcularTotal().toFixed(2) + " €");