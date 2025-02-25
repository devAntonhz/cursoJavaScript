// let objeto = {};
// let objeto = new Object();

//? CONTRUCTORES EXISTEN
//? new Array(); []
//? new String(); "" '' ``
//? new Number(); 12 15.5
//? new Boolean(); true

// function Usuarios() {
//   this.nombre = "Juanito Alimaña";
// }

// let user = new Usuarios();
// console.log(user.constructor);

const string1 = "5 * 5";
const string2 = new String("5 * 5");

console.log(eval(string1), eval(string2));

console.log(string1.valueOf());
console.log(string2.valueOf());
