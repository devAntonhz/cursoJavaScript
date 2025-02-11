// const arreglo = new Array(10);
// console.log(arreglo);

// const newArreglo = [true];
// console.log(newArreglo);

// let nombre = ["Jorge", "Cesar", "Jessica", "Nelson"];
// console.log(nombre);
// console.log({nombre});

// let juegos = ["Dota2",
//               "Valorant",
//               "Fornite",
//               "FreeFayer"
// ];
// console.log(juegos[0]);

// let elementos = ["Maria",
//                  "Pedrito",
//                  5065,
//                  20 + 10,
//                  function(){},
//                  {color: "rojo"},
//                  ["Luis",
//                   20,
//                   true,
//                   "Carlos"],
// ];
// console.log(elementos[3]);
// console.log(elementos[6][3]);

//? METODOS DE ARREGLO
let frutas = ["manzana", "pera", "platano", "uva"];

//? LONGITUD
let longitud = frutas.length;
console.log(longitud);

let primerElemento = frutas[1 - 1];
console.log(primerElemento);

let ultimoElemento = frutas[frutas.length - 1];
console.log(ultimoElemento);

console.log({ primerElemento, ultimoElemento });

frutas[4] = "Cereza";
console.log({ frutas });

//? METODO PARA AGREGAR ELEMENTO AL FINAL DEL ARRAY
frutas.push("Maracuya");
console.log({ frutas });

//? METODO PARA AGREGAR AL INICIO DEL ARRAY
frutas.unshift("Melocoton");
console.log(frutas);

//? METODOO PARA ELIMINAR ELEMENTO DE MI ARRAY
frutas.pop();
console.log({ frutas });

//? ELIMINA MAS DE UN ELEMENTO DEL ARRAY
let posicionBorrada = 2;
let borrandoGrupo = frutas.splice(posicionBorrada, 3);
console.log({ borrandoGrupo, frutas });

//! TAREA: Crea una lista 4 elementos de DANZAS TIPOCAS PERUANAS, AGREGA AL INICIO Y AL FINAL UNA LISTA y LA POSICION DEL ELEMENTO 3 ELMINALA, E IMPRIME EN CONSOLA.
