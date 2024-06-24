/* l hoisting es una característica de JavaScript que permite que las declaraciones de variables y funciones
 se muevan al comienzo del ámbito actual (por ejemplo, la función o el bloque) durante el proceso de interpretación 
 del código. Esto significa que, aunque una declaración de variable o función puede aparecer en cualquier parte 
 del código, JavaScript la tratará como si estuviera al principio del ámbito en el que se ha declarado.

Por ejemplo, consideremos el siguiente código: */

console.log(a); // 1º impirme  undefined, aunque no haya variable hasta esa misma linea
var a = "Hola"; //
console.log(a); // aqui es donde imprime 'Hola'
/* Aunque la línea console.log(a) aparece antes de la línea var a = 'Hello', JavaScript interpreta el 
código como si fuera el siguiente: */

var a;
console.log(a); // undefined
a = "Hello"; // en este orden lee el codigo (a esto se le llama hoisting)
// para que imprimiera el 'Hello' tendria que poner un consolo.log debajo de a="Hello"

/*Esto se debe a que el proceso de hoisting mueve la declaración de la variable a al principio del ámbito. 
Sin embargo, el valor de la variable todavía no se asigna hasta que se ejecuta la línea a = 'Hello' */

//..El hoisting tambien afecta a las declaraciones de funciones:

sayHello(); // 'Hello'

function sayHello() {
  console.log("Hello");
}

/* En este caso, aunque la llamada a la función sayHello() aparece antes de la declaración de la función,
 el código se interpreta como si fuera el siguiente:*/

function sayHello() {
  console.log("Hello");
}

sayHello(); // 'Hello' -----> en este caso siempre ejecutará la funcion pongas donde la pongas en tu codigo

/*!!!!!!!!!!!! Por esto hay que tener cuidado con VAR que ya esta en desuso. Puesto que no da error y no rompe el codigo
simplemente devuelve undefined aunque no haya variable creada. Esto no sucede con let y const */

/* Es importante tener en cuenta que el hoisting solo afecta a las declaraciones de variables y funciones, 
no a las asignaciones o a los otros tipos de expresiones. Por ejemplo: */

/* 
console.log(a); // ReferenceError: a is not defined ----_> ROMPE CODIGO
let a = 'Hello'; 


En este caso, la declaración de let a no se mueve al principio del ámbito y la línea console.log(a) 
intenta acceder a una variable no definida, lo que produce un error.
*/

// EJEMPLO DE USO

/* Una de las ventajas en JavaScript de colocar (ponerlas en memoria) las declaraciones de funciones 
antes de ejecutar cualquier otro segmento de código es que permite utilizar una función antes de declararla en el 
código. Por ejemplo. */

function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}

nombreDelGato("Maurizzio"); //El código está escrito de la manera que sería esperada para que funcione. Ahora, veamos qué sucede cuando llamamos a la función antes de escribirla.
/*
  El resultado del código es: "El nombre de mi gato es Maurizzio"
  */

//--ahora llamamos a la funcion antes de escribirla

nombreDelGato("Dumas");

function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}
/*
El resultado del código es: "El nombre de mi gato es Dumas"


Como se puede observar, aunque primero llamamos a la función en el código, antes de que sea escrita, el código aún funciona.
 Esto sucede por la manera en la que el contexto de ejecución trabaja en JavaScript.
*/
