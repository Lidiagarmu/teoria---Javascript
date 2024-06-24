/* El metodo FILTER() --> es una funcion de la clase Array que permite filtrar elementos de un array en 
funcion de una condicion dada y devolver un nuevo array con los elementos que cumplen esa condicion.
Es muy util para extraer elementos de un array de una forma rapida y sencilla */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numeros.filter((numero) => numero % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

/*...En este ejemplo, la función de devolución de llamada es una función flecha que comprueba si el número es 
par (es decir, si el resto de la división del número por 2 es igual a 0). Si el número es par, la función 
de devolución de llamada devuelve true y el número se incluye en el nuevo array evenNumbers.
 Si el número es impar, la función de devolución de llamada devuelve false y el número no se incluye 
 en el nuevo array. */

//-----------EJEMPLO 2 --------------

/* Puedes utilizar filter() para filtrar cualquier tipo de array y puedes personalizar la función 
 de devolución de llamada para que haga cualquier tipo de comprobación que necesites. Por ejemplo, para 
 filtrar un array de objetos basándote en un valor de propiedad del objeto, podrías hacer algo como esto */

const products = [
  { name: "apple", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "lettuce", type: "vegetable" },
  { name: "orange", type: "fruit" },
];

const fruits = products.filter((products) => products.type === "fruit");

console.log(fruits);
// [{name: 'apple', type: 'fruit'}, {name: 'banana', type: 'fruit'}, {name: 'orange', type: 'fruit'}]

//-------------EJEMPLO 3 ---------------
/*
En este caso, tenemos un array users con objetos que tienen dos propiedades: name y age. Usamos filter() 
para extraer los objetos cuya propiedad age es mayor que 30 y guardar el resultado en un nuevo array olderThan30. 
Al final, imprimimos este nuevo array en la consola y podemos ver que sólo contiene los objetos cuya edad es 
mayor que 30.*/

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Alice", age: 40 },
];

const olderThan30 = users.filter((user) => user.age > 30);
console.log(olderThan30); // imprime [ { name: 'Bob', age: 35 }, { name: 'Alice', age: 40 } ]

// AVANZANDO EN EL USO DEL FILTER :

//¿Que sucede si tiene una matriz, pero solo quiere algunos de sus elementos? Ahi es donde entra en juego .filter() :

//Aqui estan nuestros datos:

var pilots = [
  { id: 2, name: "Wedge Antilles", faction: "Rebels" },
  { id: 8, name: "Ciena Ree", faction: "Empire" },
  { id: 40, name: "Iden Versio", faction: "Empire" },
  { id: 66, name: "Thane Kyrell", faction: "Rebels" },
];

//Digamos que queremos dos conjuntos: uno para los pilotos rebeldes, el otro para los imperiales. ¡Con .filter() no podría ser más fácil!

var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});

var empire = pilots.filter(function (pilot) {
  return pilot.faction === "Empire";
});
console.log(empire); /* imprime
{ id: 8, name: 'Ciena Ree', faction: 'Empire' },
{ id: 40, name: 'Iden Versio', faction: 'Empire' } */

// Y esto es aun mas corto con las ARROW FUNCTION:
const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
const empire = pilots.filter((pilot) => pilot.faction === "Empire");
