const persona = {
    nombre: "Laura",
    edad: 24,
    profesion: "desarrolladora",

    describir: function() {
        return `${this.nombre} tiene ${this.edad} años y trabaja como ${this.profesion}`;
    }
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

console.log(persona.describir());
persona.edad = 25;
console.log(persona.describir());