// al igual en los arrays, en los strings podemos acceder a cada uno de ellos de manera individual haciendo use de corchetes []
const pokemon = "pikachu";
console.log(pokemon[3]); // consola devuelve "a" que es la posicion 3

/*metodos que se usan cuando trabajas con Strings
1) length
2) includes
3) repeat
4) replace
5) replaceAll
6) slice
7) split
8) toLowercase
9) toUpperCase
10) trim */

// length  --> nos permite conocer la longitud de un string
const country = "Spain";
console.log(country.length); //retorna 5

// includes --> nos permite conocer si un caracter o una porcion de caracteres se encuentran dentro de un string devolviendo un valor boleano

const quote = "to infinity and beyond";
const word = "infinity";
console.log(quote.includes(word)); // retorna: true

// repeat --> devuelve un nuevo string con el numero de copias del string donde lo estemos aplicando. Este numero se le pasara por argunmento al metodo

const droid = "roger";
console.log(droid.repeat(2)); // retorna rogerroger

/* replace --> devuelve un string con el string insertado por argumento sustituido por el segundo argumento, es decir
como primer argumento recibira el substring que queremos sustituir y como segundo argumento el substring que queremos que reemplace a este*/

const movie = "Star Trek";
console.log(movie.replace("Trek", "Wars")); // retorna "Star Wars"

// replaceAll --> es igual de replace pero este reemplaza todas las coincidencias encontradas en el strings con el substring indicado

const quoote =
  "Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos a las tinieblas en la Tierra de mordor  donde se extienden las Sombras.";
console.log(quoote.replaceAll("Anillo", "Gato"));

// slice -->devuelve una nueva cadena con la porcion delimitada entre la posicion del primer argumento y la posicion del segundo argumento

const album = "Master of Puppets"; // en este caso los argumentos son 10 y 13
console.log(album.slice(10, 13)); //retorna "Pup"

// split --> este genera un array de tantos elementos como se indique en el segundo argumento indicadole el elemento separador en el primer argumento

const phrase = "Buenos dias, ¿como estas Ramona";
console.log(phrase.split("", "3")); //retorna "Buenos","dias", "¿como"

// toLowerCase --> devuelve el valor del string convertido a minusculas

const naame = "Peter";
console.log(naame.toLowerCase()); // retorna "peter"

// toUpperCase --> devuelve el valor del string convertido a mayusculas

const nickname = "Pedro";
console.log(nickname.toUpperCase()); // retorna "PEDRO"

// trim --> elimina los espacios en blanco desde el principio hasta el final del string

const frase = "          Luke, yo soy tu padre    ";
console.log(frase.trim()); // retorna "Luke, yo soy tu padre"

//-------------------------------------CLASE STRINGS-----------------//

// cada tipo de datos tiene sus metodos. un metodo es una funcion que ya esta definida por javascript y que yo quiero utilizar

// INCISO: en vez de concatener de esta manera: console.log(sentence + "asfafa" + "afag")
const sentence = "Yo soy Batman";

let index = 5;

// lo mejor es concatener con las backstreet:

console.log(
  `Voy a usar el index ${index} para que me devuelva el elemento  en esa posicion ${sentence.at(
    index
  )}` // el metodo  .at  te devuelve el elemento en la posicion indicada . le pasas un numero, en este caso el de index y te devuelve el elemento que esta en esa posicion, en este caso la "y"
); // --> con el $ y {} puede acceder directamente al index y dentro de las llaves me permite operar

console.log(
  `Voy a usar el index ${index}  para que me devuelva el elemento en esa posicion ${sentence.at(
    index - 1
  )}`
); // en este caso opera 5-1 por lo que muestra "o" posicion cuarta

console.log(
  `Voy a NO usar el index para que me deuelva el elemento en esa posicion por defecto ${sentence.at()}`
); // cuando a .at no le pasamos ningun valor por defecto devuelve la posicion 0 en este caso la "Y" y si pasamos un -1 es el ultimo "n"
