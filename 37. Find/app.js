/* el metodo find() de JS es una funcion de la clase Array que permite encontrar un elemento en un array que 
cumpla una condicion dada y devolverlo. Es muy util para buscar un elemento especifico en un array de forma rapida 
y sencilla */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const four = numbers.find((number) => number === 4);

console.log(four); // 4

/* En este ejemplo, hemos creado un array numbers con diez números. Luego, hemos utilizado find() para
 buscar el número 4 en el array y guardar el resultado en una variable four. Al final, hemos imprimido 
 esta variable en la consola y podemos ver que contiene el número 4. */

//-----------Ejemplo 2 -----------

//Otro ejemplo de cómo se puede usar find() es para buscar un elemento en un array de objetos:

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

const bob = users.find((user) => user.name === "Bob");

console.log(bob); // { name: 'Bob', age: 35 }

/* En este caso, tenemos un array users con objetos que tienen dos propiedades: name y age. 
Usamos find() para buscar el objeto cuya propiedad name es 'Bob' y guardar el resultado en una 
variable bob. Al final, imprimimos esta variable en la consola y podemos ver que contiene el objeto 
que representa al usuario 'Bob'. */

/* EJEMPLO AVANZADO -----------------------------------------Ejemplo find() devuelve el valor del primer elemento 
del array que cumple la funcion de prueba proporcionada */

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found); // imprime 12
