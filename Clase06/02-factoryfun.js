// let usuario = {
//   id: 1,
//   email: "corre1@gmail.com",
//   nombre: "Juanito",
//   contrasenia: '152"EDs21dd',
//   recuperarPass: function () {
//     console.log("Recuperando Contaseña");
//   },
// };

// FACTORY FUNCTION
function crearUsuarios(email, nombre) {
  return {
    // id: 1,
    email,
    nombre,
    contrasenia: '152"EDs21dd',
    recuperarPass: function () {
      console.log("Recuperando Contaseña");
    },
  };
}
// // let creadoUsuario = crearUsuarios();
// // console.log(creadoUsuario);
// let usuario1 = crearUsuarios("sandra@correo.com", "Sandra");
// let usuario2 = crearUsuarios("josluis@correo.com", "Jose Luis");
// console.log(usuario1, usuario2);

//! TAREA: Crea un FACTORY FUNCTION autosNuevos que tengan y que imprima MODELO, MARCA y AÑO , de 2 Automoviles
function autos(modelo, marca, anio) {
  return {
    modelo,
    marca,
    anio,
  };
}

let auto1 = autos("A2df2", "TOYOTA", "2020");
let auto2 = autos("L2-2", "NISSAN", "2009");
console.log(auto1, auto2);
