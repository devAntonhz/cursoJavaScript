let usuario = {
  email: "micorreo@outlook.com",
  name: "Juanito Alimaña",
  direccion: {
    calle: "Av Lancomar",
    numero: 22,
  },
  estadoCivil: "soltero",
  recuperarContrasenia: function () {
    console.log("El ususraio recupero clave");
  },
};

usuario.dni = 4894894;
delete usuario.name;

console.log({ usuario });
