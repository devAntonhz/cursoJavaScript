function Usuarios() {
  this.id = 1;
  this.nombre = "Marina";
  this.recuperarPass = function () {
    console.log("Recuperando Clave......!");
  };
}

let usuario = new Usuarios();
console.log(usuario);
