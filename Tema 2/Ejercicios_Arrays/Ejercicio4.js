const coche = {
    marca: "Toyota",
    modelo: "Yaris",
    anio: 2020,

    calcularAntiguedad: function() {

        const anioActual = new Date().getFullYear();

        if (
            !Number.isInteger(this.anio) ||
            this.anio < 1886 ||
            this.anio > anioActual
        ) {
            return null;
        }

        return anioActual - this.anio;
    }
};

const antiguedad = coche.calcularAntiguedad();

if (antiguedad === null) {
    console.log("Año no válido");
} else {
    console.log("El coche tiene " + antiguedad + " años");
}