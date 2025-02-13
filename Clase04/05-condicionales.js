// let edad = 20;

// if (edad > 10) {
//   console.log("El numero si es igual");
// }

// if (edad === 20) {
//   console.log("True");
// }

// let edad = 25;

// if (edad >= 18) {
//   console.log("Puede ver la pelicula");
// } else {
//   console.log("No puede ver la pelicula");
// }

// let edad = prompt("Ingrese su edad: ");

// edad = +edad;

// if (edad < 0) {
//   console.log("Solo numeros enteros");
// } else if (edad >= 18) {
//   console.log("Puede ver la pelicula");
// } else if (edad >= 11) {
//   console.log("Necesita el permiso de los padres");
// } else {
//   console.log("No puede ver la pelicula");
// }

//! TAREA: CREA UNA FUNCION QUE IMPRIMA EL NUMERO MAYOR DE 2 VALORES (argumentos)

const validarNum = (a, b) => (a > b ? a : b);
// let a = prompt("Ingresa un primer numero: ");
// let b = prompt("Ingresa un segundo numero: ");
// a = +a;
// b = +b;
// console.log("El numero mayor es:", validarNum(a, b));

// //? INTERPOLACION DE STRING

// let nombre = prompt("Ingrese su nombre");

// // console.log("Bienvenido(a) estimado(a):", nombre);
// console.log(`Bienvenido(a) estimado(a): ${nombre}`);

// let iguales = true == !true ? "Es verdadera" : "Es falso";

// console.log(iguales);

// if (true === !true) {
//   console.log("Es verdadero");
// } else {
//   console.log("Es falso");
// }

//? ARREGLOS O ARRAY

const estudiante = true;

const estudianteInceperu = [
  "Jessica", 
  "Kevin", 
  "Paul",
  estudiante ? "Antonio" : "Pepito"
];

console.log({estudianteInceperu});


const estadoCivil = (estado) => estado ? "Soltero" : "Casado";

console.log("El usuario esta:", estadoCivil(true));
