/* some () -->  el metodo some() de JS es una funcion de la clase Array que permite comprobar 
si al menos un elemento de un array cumple una condicion dada 
Devuelve true si encuentra al menos un elemento que cumpla la condicion dada y false en caso contrario
Es muy util para verificar si un array cumple ciertas condiciones de una forma rapida y sencilla */

const numbers = [1, 2, 3, 4, 5];

const numbersPar = numbers.some((number) => number % 2 === 0);

console.log(numbersPar); // true

/* En este ejemplo, hemos creado un array numbers con cinco números. Luego, hemos utilizado some() para 
comprobar si hay al menos un número par en el array y guardar el resultado en una variable  'numbersPar'.
Al final, hemos imprimido esta variable en la consola y podemos ver que es true, lo que significa que hay 
al menos un número par en el array. */

/* ------En este caso, tenemos un array users con objetos que tienen dos propiedades: name y age.
 Usamos some() para comprobar si hay al menos un objeto cuya propiedad isAdmin es true y guardar el 
 resultado en una variable hasAdmin. Al final, imprimimos esta variable en la consola y podemos ver que 
 es false, lo que significa que ningún objeto tiene la propiedad isAdmin igual a true. ------------*/

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

const hasAdmin = users.some((user) => user.isAdmin === true);

console.log(hasAdmin); // false

// .........................
/* En algunos casos, puede que quieras utilizar el método every() en lugar de some().
every() es similar a some(), pero en lugar de devolver true si al menos un elemento cumple 
la condición, devuelve true sólo si todos los elementos cumplen la condición. */

const numberos = [1, 2, 3, 4, 5];

const todosPares = numberos.every((number) => number % 2 === 0);

console.log(todosPares); // false
