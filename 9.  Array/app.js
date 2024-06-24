// Arrays --> son un tipo de objeto qye se utilizan para almacenar una coleccion de valores

// los arrays pueden almacenar cualquier tipo de valores (numeros, cadenas de texto, objetos, funciones...)

// para crear un ARRAY, se pueden utilizar la funcion Array(), o las llaves []

// SINTAXIS con FUNCION:

let array = new Array();

// SINTAXIS con LLAVES:

let arrayy = [];

// TRABAJANDO CON ARRAYS: la manera de representar un listado de elementos en programacion se denomina array y esta compuesto por varios items:

let listYears = [1972, 1984, 1988, 1992, 1997, 2021, 2022];
let listNames = ["Captain America", "Spiderman", "IronMan"];
let listSuperHeroes = [
  { id: 1, name: "Tony Stark" },
  { id: 4, name: "Peter Parker" },
];

// DECLARAR Y ACCEDER A LOS ELEMENTOS DE UN ARRAY:
/* Pensemos en el array como una lista de elementos, cada uno con su posición (empezando por la 0). Para acceder 
a la primera posición del array, basta con poner entre corchetes el número 0. */

let avengers = ["Hulk", "Spiderman", "Batman"];

let heroes = avengers[2];
console.log(heroes); // devuelve 'Batman' . Si pusiera [3], devuelve UNDEFINED

//METODOS QUE MODIFICAN EL ARRAY

// array en funcion NO ES LO TIPICO, pero vamos a hacer asi el ejemplo para ver mejor las posiciones:

let moderatIII = new Array();
moderatIII[0] = "Eating hooks";
moderatIII[1] = "Running";
moderatIII[2] = "Finder";
moderatIII[3] = "Ghostmother";
moderatIII[4] = "Reminder";
moderatIII[5] = "Intruder";
moderatIII[6] = "Animal trails";

console.log(moderatIII);

// sigiendo EL EJEMPLO ANTERIOR  ---->

//---------------pop() no admite parametros. elimina el ultimo elemento del array

moderatIII.pop();
console.log(moderatIII); // devuelve todos los elementos del array menos "Animal trails"

//---------------push()  entre los parentesis se pueden añadir tantos valores como se quiera separados por comas(,) Añade un elem. al array en ultima posicion

moderatIII.push("Ethernal");
console.log(moderatIII); //devuelve toda la lista de array y añade 'Ethernal'

//----------------reverse() tampoco admite parametros, Invierte el orden del array

moderatIII.reverse();
console.log(moderatIII);

//----------shift() funciona como pop(), pero extrayendo del array el primer elemento. Todos los índices de la matriz se actualizan

moderatIII.shift();
console.log(moderatIII); // devuelve toda la lista de array menos el primer elemento que lo elimina

//-----------sort()  ordena los elementos del array, tal y como ordena los nombres de archivo un ordenador, por orden alfabetico o cifras de menos a mayor...

moderatIII.sort();

console.log(moderatIII); // devuelve la lista ordenada por orden alfabetico

//----------splice()  es un metodo especial cuyo comportamiento depende de los parametros qye se le asigen

/* -el primer parametro: es un numero que representa el indice desde el que tiene que empezar a modificar la raiz
   -el segundo parametro: es un numero que indica el numero de elementos que debe eliminar o sustituir, contando el inicial
   (por ello un valor 0 no modifica nada en absoluto) 
   -tras estos dos parametros se puede incluir una lista de elementos separados por comas: 
       1.si NO se incluyen elementos, splice() simplemente ELIMINA tantos elementos como se han indicado en el segundo parametro
       2.si se incluyen MENOS elementos que el valor del segundo parametro, splice() RELLENA los "huecos" hasta quedarse sin valores y ELIMINA los que faltan
       3.si se incluyen MAS elementos que el valor del seg. param., splice() primero ELIMINA los indicador, y luego INSERTA todos los elem hasta quedarse sin valores.
       En este ultimo tercer caso, splice() no devuelve la parte del array seccionada como en los anteriores, sino la nueva longitud


   */

moderatIII.splice(2, 2);

console.log(moderatIII);

moderatIII.splice(2, 2, "Ethereal");

console.log(moderatIII);

moderatIII.splice(
  2,
  2,
  "Ethereal",
  "Ethereal Remix vol.1",
  "Ethereal Remix vol.2"
);

console.log(moderatIII);

// METODOS QUE NO MODIFICAN LA MATRIZ: Estos metodos devuelven una representacion del array pero no lo modifican.

let moderatII = new Array();
moderatII[0] = "The Mark";
moderatII[1] = "Bad Kingdom";
moderatII[2] = "Versions";
moderatII[3] = "Milk";
moderatII[4] = "Gita";
moderatII[5] = "Damage Done";

let moderat = new Array();
moderat[0] = "Rusty nails";
moderat[1] = "Seanmonkey";
moderat[2] = "Nasty silence";
moderat[3] = "Berlin";

//------------concat() en este caso he concatenado la segunda matriz a la primera

moderatII.concat(moderat);
console.log(moderatII.concat(moderat));

console.log(moderatII); // estos dos console.log son para ver que diferencia hay con el anterior
console.log(moderat);

//----------slice() extrae una copia de una sección especificada de una matriz, aunque a diferencia de splice() no la modifica.
/*                  para este metodo el primer parametro es obligatorio y el segundo opcional
                    1. si definimos ambos parametros: el primero es el indice desde el que debe comenzarse la copia y el segundo
                    en el que ha de detenerse
                    2. si solo se define el primer parametro, cuenta como indice desde el que comenzar la copia, que abarcara los elementos hasta el final de la matriz


            */
moderatII.slice(2, 4);

console.log(moderatII);

moderatIII.slice(3);

console.log(moderatIII);

//--------------toStrign() metodo que no admite parametros y su resultado es un objeto String, con sus propiedades y metodos

moderatII.toString();

console.log(moderatII);

//LOCALIZAR UN VALOR EN UN ARRAY

let modeSelector = ["Who", "Fentanyl", "Tom", "Dy"];

// ---------indexOf()  devuelve el indice del primer elemento que coincide con el parametro proporcionado

console.log(modeSelector.indexOf("Tom")); //devuelve 2 que es la posicion donde se encuentra 'Tom'. Si no se da coincidencia devuelve -1

//----------lastIndexOf()  devuelve el indice del ultimo elemento que coincide con el parametro proporcionado. si no da coincidencia tambien -1

// >>>>>>>estos metodos anteriores indexOf y lastIndexOf son utiles  cuando se esta comprobando la NO existencia de un elemento en un array

//-----------------includes()    determina si una matriz incluye un determinado elemento, devuelve TRUE o FALSE

const listNumbers = [1, 2, 3];
console.log(listNumbers.includes(2)); // devuelve TRUE

const listName = ["Lidi", "Ana", "Eva"];
console.log(listName.includes("Lau")); // devuelve FALSE
