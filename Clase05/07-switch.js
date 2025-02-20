//? SWITCH

// let accion = "imprimir";

// switch (accion) {
//   case "listar":
//     console.log("Archivo listado");
//     break;
//   case "guardar":
//     console.log("Archivo guardado");
//     break;
//   case "imprimir":
//     console.log("Archivo imprimido");
//     break;
//   default:
//     console.log("Accion no reconocida");
// }

//! TAREA: CREA UN PROGRAMA QUE ADIVINE EL NOMBRE CON LA INICIAL M, EL PROGRAMA DEBE PEDIRLE AL USUSARIO QUE COLOQUE UN NOMBRE QUE EMPIEZE CON M

let adivinaNombre = prompt('Ingrese un nombre con letra: "M"');

switch (adivinaNombre.toLowerCase()) {
  case "maria":
    alert("ADIVINASTE EL NOMBRE...!!");
    break;
  default:
    alert("FALLASTE...!!!");
    break;
}
