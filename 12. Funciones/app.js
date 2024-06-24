// la sintaxis de una funcion en Javascript es la siguiente:
function nombreDeLaFuncion(parametros) {
  //codigo a ejecutar
}

// los parametros son variables que se pasan a la funcion y que se pueden utilizar dentro de ella. Una funcion puede tener cero o mas parametros
// para llamar a la funcion, se utiliza su nombre seguido de parentesis y, en algunos casos, de argumentos entre ellos.
//los argumentos son valores que se pasan a la funcion y que se asignan a los parametros de la funcion

function suma(a, b) {
  return a + b;
}
let resultado = suma(3, 4); // resultado = 7
console.log(resultado);
/*en el caso anterior la funcion suma tiene dos parametros: a y b. Al 
llamar a la funcion con suma(3, 4) se asignan los valores 3 y 4 a los parametros a y b, respectivamente.*/

function atleti(x, y) {
  return x == y;
}
let balonDeOro = atleti("Torres", "koke");
console.log(balonDeOro); // muestra booleano false puesto que llamando a la funcion atleti vemos que los parametros torres y koke no son ==

/* 
1) DECLARACION DE FUNCIONES
2) VALORES PREDETERMINADOS
3) RETORNO DE LAS FUNCIONES
4) ALTERNATIVA A PARAMETROS INDETERMINADOS
5) NOMBRADO DE FUNCIONES
6) ARROW FUNCTIONS
7) ARGUMENTOS EN LAS ARROW FUNCTIONS
8) LIMITACIONES EN LAS ARROW FUNCTIONS */

/*1) DECLARACION DE FUNCIONES -> sintaxis para declarar una funcion:
palabra reservada FUNCTION + nombre de mi funcion + unos () donde iran nuestros parametros + {} en las cuales realizaremos nuestras operaciones */

function pokemon() {
  // lo que aparece entre llaves es conocido como el cuerpo de la funcion
  console.log("Pikachu, ¡IMPACT TRUENO!");
}
pokemon();
function pokemonParams(name, attack) {
  console.log(`¡name: ${name}, attack: ${attack}!`); // esto `${nombre del parametro}`es un template string  y se utiliza para que el valor de los parametros vayan cambiando segun lo vayamos modificando
} // una vez tenemos nuestras funciones declaradas tenemos que invocarlas para que realicen la funcionalidad programada

pokemonParams("Charmander", "Ascuas");
pokemonParams("Squirtel", "Pistola de agua");

// 2) VALORES PREDETERMINADOS --> si una funcion es llamada pero no se le proporciona un argumento o parametro, su valo correspondiente se convierte en undefined
function pokemonAttackParams(name, attack) {
  console.log(`¡${name} ${attack}!`);
}

pokemonAttackParams("bulbasaur"); // aqui invocamos a la funcion pero le estamos pasando solo un argumento por parametro. Nos mostrara "¡Bulbasaur undefined!" Como no se pasa un valor de attack, este se vuelve undefined
/* Imaginar querer tener un ataque pokemon por defecto cuando no le pasemos el argumento attack a nuestra funcion.
Podemos especificar para ellos un valor llamado DEFAULT predeterminado en la declaracion de funcion usando =. */

function pokemonAttackParamsDefault(name, attack = "Araque arena") {
  console.log(" ¡${name} ${attack}!");
}
pokemonAttackParamsDefault("Onix"); // muestra ¡Onix Ataque arena!

function pokemonAttackParams(name, attack) {
  console.log(`¡${name} ${attack}!`);
}

pokemonAttackParams("bulbasaur");
function pokemonAttackParamsDefault(name, attack = "Ataque arena") {
  console.log(` ¡${name} ${attack}! `);
}

pokemonAttackParamsDefault("Onix"); // ¡Onix Ataque arena!

//3) RETORNO DE LAS FUNCIONES --> si queremos transformar un dato y devolver un valor nuevo tenemos que retornrar el elemento manipulado a traves de RETURN

function sumar(numA, numB) {
  return numA + numB;
} // nunca añadir codigo despues de un return dentro del codigo pues no se va a ejecutar
let results = suma(5, 20); //valor es 25
console.log(results);

//es posible usar RETURN sin ningun valor, esto hace que la funcion salga o termine inmediatamente

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  console.log("Mostrandote la pelicula");
} // si checkAge(age) devuelve false, entonces shorMovie no mostrara el valor por consola

/* 4) ALTERNATIVA A PARAMETROS INDETERMINADOS --> A veces tiene sentido asignar valores predeterminados, no en la declaracion
de funcion, sino en un estadio posterior. Podemos verificar si un parametro es pasado durante la ejecucion de la funcion
comparandolo con undefined*/

function showPokemon(name) {
  if (name === undefined) {
    //si falta el parametro
    name = "Magikarp";
  }
  console.log(name);
}
showPokemon(); //muestra Magikarp

//o seguiendo el ejemplo anterior podemos usar el operador ||

function showPokemoon(name) {
  //si name es indefinida o falsa, la establece a "Magikarp"
  name = name || "Magikarp";
  return name; // --> aqui estoy CREANDO la funcion
}
showPokemoon(); // --> aqui estoy EJECUTANDO la funcion
console.log(showPokemoon());

/*5) NOMBRADO DE FUNCIONES --> las funciones son acciones. Entonces SU NOMBRE suele ser un verbo. 
Debe ser breve lo mas preciso posible y describir lo que hace la funcion para que alguien que lea el codigo 
obtenga una indicacion de lo que hace la funcion*/

//showMessage(..)  --> muestra un mensaje
//getAge(..) --> devuelve la edad

/* 6) ARROW FUNCTIONS --> Es una manera de generar funciones mas compacta y ademas nos ayudara a 
entender mejor los problemas del SCOPE.  
Al ver la sintaxis, ya no hace falta escribir la palabra FUNCTION, lo sustituimos por la flecha =>

La arrow function tienen la capacidad de capturar el objeto THIS del contexto donde la ARROW se ejecuta
y asi utilizarlo dentro de su bloque de sentencias.*/

const getName = () => {
  console.log("Devolviendo nombre");
  return "Carlos";
};
const nombre = getName();
console.log(nombre);

//Ahora un ejemplo omitiendo el return

const getSurname = () => "Martin";
const surname = getSurname();
console.log(surname);

//en el siguiente ejemplo, la funcion nos devuelve un mensaje sin la necesidad de tener un return

const helloWorld = () => "Hola mundo";
const hello = helloWorld();
console.log(hello);

//el ejemplo anterior en caso de querer usar un return:

const helloWorldd = () => {
  const messageToWorld = "Hello world";
  return messageToWorld;
};
helloWorldd(); // aqui la estoy ejecutando pero para verlo solo en consola esto no haria falta
console.log(helloWorldd()); // aqui ejecuto la funcion EN CONSOLA. Lo que hago es escribir el nombre de la funcion y sus ()

// EN EL CASO DE QUERER DEVOLVER UN OBJECT INLINE, LA SINTAXIS DEBERA SER LA SIGUIENTE:
const myObjt = () => ({ atribute: "atribute", atribute: "atribute" });

// 7) ARGUMENTOS EN LAS ARROW FUNCTIONS --> Como ya sabeis en las funciones pueden entrar parametros que indiquen los valores con los que vamos a trabajar en el caso de las arrow functions

const multiTwo = (x) => x * 2;
const result = multiTwo(3);
console.log(result);

// * en el resto de casos si es necesario especificar los parenteisis

const multi = (a, b) => a * b;
const multiplicacion = multi(2, 2);
console.log(multiplicacion);

// * existe la opcion de tener valores por defecto

const multiDefault = (a, b = 3) => a * b;
const operation = multiDefault(2);
console.log(operation);

/*  8) LIMITACIONES ARROW FUNTIONS:

1. No tienen una palabra clave THIS (en una funcion tradicional, la palabra clave THIS 
  se refiere al objeto QUE LLAMA a la funcion. En una funcion Arrow, THIS se refiere
  al objeto QUE CONTIENE la funcion. Esto puede ser un problema por ejemplo cuando 
  se necesita acceder al objeto que llama a la funcion

2. No pueden ser usadas como CONSTRUCTORES, es decir, no pueden ser utilizadas con la palabra clave NEW

3. No tienen palabra clave ARGUMENTS. Esta es una variable local que se crea en todas las funciones
y que contiene una lista de argumentos pasados a la funcion. En una arrow functions, no se 
puede acceder a ARGUMENTS

4. No pueden ser usadas COMO METODOS de objetos. */

//ejemplo de una de las limitaciones

const obj = {
  nombre: "Lidi",
  sayHi: () => {
    console.log(`Hi, my name is ${this.nombre}`);
  },
};
obj.sayHi(); // muestra "Hi, my name is undefined"
