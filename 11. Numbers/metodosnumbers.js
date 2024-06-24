//-----------------VIDEO-CLASE METODOS NUMBERS---------------------

//los numbers se ven mejor a través de una funcion

// 1. INTEGER (entero)

function divider(a, b) {
  if (Number.isInteger(a / b)) {
    return "si";
  }
  return "no";
}
console.log(divider(10, 5)); //muestra SI puesto que es entero

console.log(divider(5, 11)); //muestra NO pues no es entero

//es un metodo number pero no tiene por que ser un valor number. De hecho normalmente se utiliza como en el caso anterior

// 2. parseFloat --> cuando quieres pasar un formato a decimal/flotante para ser mas preciso.

function circunference(r) {
  //vamos a calcular una circunferencia  y le vamos a pasar el radio.
  if (Number.isNaN(Number.parseFloat(r))) {
    // primero vamos a comprobar que lo que estoy recibiendo es un numero
    return 0;
  } else {
    return parseFloat(r) * 2.0 * Math.PI;
  }
}

console.log(circunference("4.567wtsgsg")); // devuelve/muestra 28.695307297889173 . Puesto que (r) es un numero realiza la operacion else multiplica el valor que le hemos dado por 2 y Math.Pi
console.log(circunference("dsgdsgsff")); // devuelve 0 puesto que no es un numero

// 3. parseInt --> pasa a valor entero

function circule(r) {
  if (Number.isNaN(Number.parseInt(r))) {
    // la palabra Number. --> se refiere al tipo
    return "No es un numero";
  } else {
    return parseInt(r) * 2;
  }
}
console.log(circule("4.5")); //muestra un entero al realizar la operacion "8" en vez de 8,5 que seria el result
console.log(circule("sdgsgds")); // muestra "No es un numero"
