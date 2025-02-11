// //? FUNCION TRADICIONAL
// function saludar() {
//   console.log("Hola Mundo");
// }

// // let saludar = "Hola Q hace"; // Tener Cuidado

// saludar();

// //? FUNCION ANONIMA
// // function saluda() {
// //   console.log("Hola Mundo");
// // }

// const funcAnonima = function () {
//   console.log("Hola mundo en funcion anonima");
//   console.log(2 + 2);
//   console.log(true);
// };

// funcAnonima();

//! TAREA: CREA DATOS DE NOMBRE APELLIDO EDAD EN UN FUNCION ANONIMA EN JAVASCRIPT...!!!

//? PARAMETRO Y ARGUMENTOS

// function saludarAlumno(nombre, edad) {
//   console.log("Hola Estimado(a): " + nombre);
//   console.log("Su edad es: " + edad);
// }

// // saludarAlumno(); //SALDRA NO DEFINIDO
// // saludarAlumno("Raul");
// saludarAlumno("Jorge", 32);
// saludarAlumno("Jorge");

// function saludarAlumno(nombre) {
//   console.log(arguments); // Vemos sus arguemtenos

//   console.log("Hola Estimado(a): " + nombre);
// }

// saludarAlumno("Pepita", 20, true, "Acuario", "Peru");

//? FUNCIONES FLECHA
// function saludar() {
//   console.log("Hola Mundo");
// }

// const saludarFlecha = () => {
//   console.log("Hola Mundo Flecha");
// };

// saludar();
// saludarFlecha();

//? FUNC FLECHA CON SUS PARAMETROS Y ARGS
// const saludarFlecha = (nombre) => {
//   console.log("Su nombre es: " + nombre);
// };

// saludarFlecha("Chavo del 8");

//? RETORNO DE UN VALOR
// function saludar() {
//   console.log("Hola estimados Usuarios"); // IMPRIME

//   return 1;

//   console.log("Hola Queridos estudiantes"); // IGNORA
// }

// saludar();

// function saludarEst() {
//   // console.log("Holaaaaa");
//   return ["Jose", "Maria", "Sandra"];
// }
// const retorno = saludarEst();

// console.log({ retorno });

//? RETURN Con parametros y ARgs
// function sumar(a, b) {
//   return a + b;
// }
// console.log("La suma es:", sumar(6, 4));

// const sumarFlecha = (a, b) => a + b;
// console.log("La suma es:", sumarFlecha(50, 20));

function numeroAleatorio() {
  return Math.random();
}
console.log(numeroAleatorio());

const numale = () => Math.random();
console.log("numero es:", numale());

//! TAREA: CREA UNA CALCULADORA USANDO FUNCIONES FLECHA, USANDO UN DATOS DE ENTRADA
