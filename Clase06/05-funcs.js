function Usuario(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

// console.log(Usuario.name);
// console.log(Usuario.length);

const U = Usuario;
// let usuario = new U("Juanita", "Melgariana");
// console.log(usuario);

//! TAREA: CREA UNA FUNCION Y QUE REASIGNE A UNA FUNCION CONSTRUCTORA, REFERENTES A VIDEOS(series, peliculas, terro, anime, dibujos, novelas).

// function Entretenimiento(serie, dibujo) {
//   this.serie = serie;
//   this.dibujo = dibujo;
// }

// const seleccion = Entretenimiento;
// let visual = new seleccion("Naruto", "Pokemon");
// console.log(visual);

//? FUNCIONES COMO ARGUMENTOS

function func(funcion, args) {
  return new funcion(args);
}

let usuario1 = func(Usuario, "Juanita");
console.log(usuario1);

function retornar() {
  return function () {
    console.log("Hola mundo");
  };
}

let saludar = retornar();
saludar();

//! TAREA: CREA UNA FUNCION CONTRUCTORA DONDE IMPRIMA LOS DATOS DE UNA PERSONA NOMBRE EDAD PARA DOS USUARIOS.

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  // this.imprimir = funcion() {
  //   console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  // }
}

const maria = new Persona("Maria", 30);
const melissa = new Persona("Melissa", 22);
console.log(maria, melissa);

// maria.imprimir();
// melissa.imprimir();
// console.log(maria, melissa);
