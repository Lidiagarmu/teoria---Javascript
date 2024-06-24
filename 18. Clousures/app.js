/* CLOUSURE -->  Es una funcion que tiene acceso a las variables y funciones declaradas en 
el ambito en el que se ha creado, incluso si esa funcion se ejecuta en un contecto diferente. 

Esto se debe a que las funciones en JS tienen acceso a todas las variables y funciones declaradas en su ambito padre
y a todos los ambitos padres anteriores 

Por ejemplo consideremos el codigo siguiente */

let greet = "Hello";

function sayHello() {
  console.log(greet);
}

sayHello(); /* 'Hello'    ----> En este caso, la función sayHello() tiene acceso a la variable 
greet declarada en el ámbito global, lo que significa que puede imprimir el valor de greet cuando se llama 
a la función. */

/* CLOUSURES AVANZADOS

En el siguiente ejemplo, la función crearSumador es la función padre y la función que retorna es la clausura. La clausura
 tiene acceso a la variable x de la función padre, incluso después de que crearSumador haya terminado de ejecutarse. */

function crearSumador(x) {
  return function (y) {
    return x + y;
  };
}

var sumar5 = crearSumador(5);
console.log(sumar5(3)); // imprime 8

// También puedes usar clousures para crear variables privadas en JavaScript. Por ejemplo:

function crearContador() {
  var contador = 0;
  return {
    incrementar: function () {
      contador++;
    },
    obtenerValor: function () {
      return contador;
    },
  };
}

var miContador = crearContador();
miContador.incrementar();
miContador.incrementar();
console.log(miContador.obtenerValor()); // imprime 2

/* En el ejemplo anterior, la variable contador es privada porque no está directamente expuesta fuera de la función 
crearContador. 
Sin embargo, la clausura incrementar tiene acceso a contador y puede modificarlo. 
La clausura obtenerValor también tiene acceso a contador y puede leer su valor. */
