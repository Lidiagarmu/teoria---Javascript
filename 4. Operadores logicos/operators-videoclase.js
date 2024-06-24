// 1. Operador de asignacion
let myNumber = 5;

// 2. Operador de adicion

myNumber += 1; // si myNumber valia 5 ahora vale 6

// 3. Operador de sustraccion

myNumber -= 1; // myNumber seria ahora 4

// 4. Operador de division

myNumber /= 2; // ahora myNumber seria 2.5
console.log(myNumber); // --> muestra 2.5 . el console.log muestra el valor de la variable de la última modificacion, es decir, la operacion de la FILA 14

// 5.  Operador de módulo o residuo (el resto)

myNumber %= 2;
console.log(myNumber); // --> muestra el resto de la division en este caso seria 0.5

// ademas de los operadores de + , - , * , / .......

// 6. Operador == (igualdad) ----- === (igualdad estricta)

function operadorIgualdad(a, b) {
  if (a == b) {
    console.log("Son iguales"); // MUESTRA: "Son iguales" aunque solo si EJECUTAMOS la funcion, es decir, si elimino la FILA 32 no muestra nada pasa de largo de la funcion
  }
}

operadorIgualdad(1, 1); // con esto ejecutamos la funcion. Muestra "son iguales"
operadorIgualdad(1, "1"); // muestra tambien "son iguales"
/* Pero sipongo if (a === b) --> estricto igual NO mostraria NADA al no ser iguales

== --> comprueba solo valor
== --> comprueba valor y tipo

*/

// 7. Operador != (diferencia) o !== (estrita diferencia) --> justo lo contrario al caso anterior apartado 6.

function operadorDiferencia(x, y) {
  if (x != y) {
    console.log("NO iguales!!");
  }
}
operadorDiferencia(1, "1"); // no muestra nada porque son iguales

function operadorDiferenciaTwo(a, b) {
  if (a !== b) {
    console.log("NO iguales!!");
  }
}
operadorDiferenciaTwo(1, "1"); //muestra "NO iguales!!
operadorDiferenciaTwo(2, 3); //muestra "NO iguales!!
operadorDiferenciaTwo(3, "2"); ////muestra "NO iguales!!
operadorDiferenciaTwo(3, 3); // no muestra NADA puesto que son iguales

// 8. Mayor que > || Menor que < || Mayor o igual que >= || Menor o igual que <=

if (5 > 3) console.log("Paso mayor");
