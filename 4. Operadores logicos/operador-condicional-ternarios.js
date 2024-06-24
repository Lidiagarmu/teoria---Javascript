let age = 15;

let status = age >= 18 ? "adult" : "minor"; // --> Esto es conocido como TERNARIO

/*  (age >= 18) --> esto es lo que estaría dentro del IF con ? (lo pregunto, es la condicion)
     "adult" es si SE CUMPLE la condicion muestra ese valor "adult"
     "minor" seria el else.. si NO SE CUMPLE la condicion muestra el mensaje "minor"
 */

console.log(status); // muestra "minor"

// el Ternario de la FILA 3 es igual que decir:
const edad = 10;

if (edad >= 18) {
  console.log("adulto");
} else {
  console.log("menor");
}

//------------------ CON RETURN--------------
const hola = () => {
  if (edad >= 18) {
    return "adulto";
  } else {
    return "menor"; //para que funcione el return hay que meterlo en una funcion y despues llamar la funcion (vease FILA30) mediante un console.log para verlo en terminal
  }
};

console.log(hola());
