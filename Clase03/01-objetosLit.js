// //? OBJETOS LITERALES EN JAVASCRIPT
// let estudiante = {
//   nombre: "Pepito Ramirez",
//   edad: 32,
//   estadoCivil: false,
//   ciclo: "I",
//   direccion: "Urb Sin rumbo con fe llego",
//   ubicacion: {
//     mz: "B",
//     lt: "5",
//   },
//   cursos: ["Python", "HTML Y CSS", "JavaScript", "Docker"],
// };

// console.log("Nombre:", estudiante.nombre);
// console.log("Nombre:", estudiante["nombre"]);

// console.log("Edad:", estudiante.edad);
// console.log("Cursos:", estudiante.cursos);

// console.log("Cursos: ", estudiante.cursos[3]);
// console.log("Ubicacion lt:", estudiante.ubicacion.lt);

// console.log("Curso Ultimo:", estudiante.cursos[estudiante.cursos.length - 1]);

// let peliculas = {
//   anime: "Naruto",
//   accion: "Rapidos y Furiosos",
//   romantica: "Titanic",
// };

// const verHoy = "accion";

// console.log("Peliculas:", peliculas[verHoy]);

// //? AGREGAR VALORES A OBJETO LITERAL
// let peliculas = {
//   anime: "Naruto",
//   accion: "Rapidos y Furiosos",
//   romantica: "Titanic",
// };

// peliculas.suspenso = "Chucki 3"; // Agregando valor
// console.log("Peliculas:", peliculas.suspenso);

// delete peliculas.romantica;
// console.log("Peliculas:", peliculas);

// const transfEntries = Object.entries(peliculas);
// console.log(transfEntries);

//? CONGELAMINETO DE PROPIEDAD DE Obj Literal
let peliculas = {
  anime: "Naruto",
  accion: "Rapidos y Furiosos",
  romantica: "Titanic",
};

Object.freeze(peliculas); // CONGELA TODA LAS PROPIEDADES

peliculas.dibujo = "Dragon Ball z";
peliculas.hindu = "KKHS";
delete peliculas.accion;

console.log("Pelicuals", peliculas);

const tranfArreglos = Object.getOwnPropertyNames(peliculas);
console.log({ tranfArreglos, peliculas });

const valoresArreglos = Object.values(peliculas);
console.log({ valoresArreglos, peliculas });
