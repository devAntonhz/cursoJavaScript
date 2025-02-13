// //?  AND     OR      NOT
// let hermanoMayor = true;
// let hermanoMenor = false;

// // console.log(true && true);
// // console.log(false && true);
// console.log("Operador AND:", hermanoMayor && hermanoMenor);
// console.log("Operador OR:", hermanoMayor || hermanoMenor);
// console.log("Operador NOT:", !hermanoMayor);

// const regresaTrue = () => {
//   console.log("Regresa el valor verdadero");
//   return true;
// };

// const regresaFalse = () => {
//   console.log("Regresa el valor falso");
//   return false;
// };

// console.log(true);
// console.log(!false);
// // console.log(!regresaTrue());
// console.log(regresaTrue() && regresaFalse());
// console.log(regresaFalse() && regresaTrue());

// console.log(regresaTrue() || regresaFalse());
// console.log(regresaFalse() || regresaTrue());

// console.log((true || false) && true && false);

//? Falsy
/*
false
0
''
null
undefined
NaN 
*/

let nombre = "M";
let nombreUsuario = nombre || "Jose";
console.log(nombreUsuario);
