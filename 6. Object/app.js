// un objeto es una coleccion de pares clave-valor
//......las claves son las cadenas de texto o simbolos
//......los valores pueden ser cualquier tipo de dato, incluyendo otro objeto. Los objetos se usan para almacenar y acceder a datos de manera estructurada

//ejemplos de objetos en JS:

//...objeto vacio

let obj = {};

//...objeto con algunas propiedades

let obje = {
  name: "pepe",
  age: 30,
  job: "developer",
};

//...acceder a las propiedades de un objeto

console.log(obje.name); //devuelve 'Pepe'
console.log(obje["age"]); //devuelve 30

//...modificar las propiedades de un objeto

obje.name = "Jane";
obje["age"] = 35;

console.log(obje.name); //devuelve ahora 'Jane'

//...añadir nuevas propiedades a un objeto

obje.location = "New York";

//...eliminar propiedades de un objeto

delete obje.job;

console.log(obje.job); // devuelve UNDEFINED puesto que hemos eliminado esta propiedad

//...Ademas de las propiedades, los objetos tambien pueden tener metodos, que son funciones asociadas al objeto. Ejemplo:

let objeto = {
  name: "Lidi",
  age: 29,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

objeto.greet(); // devuelve 'Hello, my name is Lidi'

//OBJETOS  Y PROPIEDADES --> Las propiedades de un objeto podria decirse que es similar a las variables comunes, salvo por el nexo con el objeto

var myAvenger = new Object();
myAvenger.name = "Captain America";
myAvenger.power = 80;
myAvenger.creator = "Stan Lee";

console.log(myAvenger.power); // devuelve 80

/*...el ejemplo anterior podria escribirse usando un iniciador de objeto, que es una lista delimitada por comas de cero o mas pares de nombres 
de propiedad y valores asociados de un objeto encerrado entre {} */

let heroe = {
  name: "Captain America",
  power: 80,
  creator: "Stan Lee",
};

// ...las propiedades no asignadas de un objeto son UNDEFINED

myAvenger.alias;

console.log(myAvenger.alias); // devuelve UNDEFINED

//...tambien puedes acceder o establecer propiedades de los objetos en JS mediante la notacion de []

myAvenger["alias"] = "Capi";
console.log(myAvenger.alias); // devuelve 'Capi'. en la LINEA 73 aun no estaba definida la propiedad en la 79 si

// ENUMERAR PROPIEDADES OBJECTO --> Hay 2 formas nativas para ENUMERAR/RECORRER las propiedades de objetos. Son los metodos:

//.....bucles for...in --> este metodo recorre todas las propiedades enumerables de un objeto y su cadena de prototipos

let batman = {
  nombre: "Bruce",
  apellidos: "Wayne",
  localizacion: "Gotham",
  profesion: "multimillonario",
};

for (let clave in batman) {
  console.log(
    "Batman tiene la clave " + clave + " con valor: " + batman[clave]
  );
} // nueva variable a la que llamo clave para ver las claves de dentro de batman

//Retorna
//Batman tiene la clave nombre con valor: Bruce
//Batman tiene la clave apellidos con valor: Wayne
//Batman tiene la clave localizacion con valor: Gotham
//Batman tiene la clave profesion con valor: Multimillonario

//.....Object.keys(o) --> este metodo devuelve un arreglo con todos los nombres de propiedades enumerables ("claves") propias de un objeto o

//-----siguiende el ejemplo anterior let batman hacemos un arreglo con nueva variables para que nos consolee las claves de batman
let keys = Object.keys(batman);
console.log(keys); // devuelve ["nombre", "apellidos", "localizacion", "profesion"]

// FUNCIONES CONSTRUCTORAS: --> en 2 pasos:
//...............1) definir el tipo de objeto escribiendo una funcion constructora. Existe una buena razon para usar la mayuscula en la letra inicial
//...............2) crear una instancia del objeto con el operador new

/*....................1.1) para definir el objeto, crea una funcion para el objeto que especifique su nombre, propiedades y metodos. Ejemplo: deseamos crear un tipo de
objeto para coches. Quieres llamar Car a este tipo de objeto, y deseas que tenga las siguientes propiedades:make, model y year. Para ello podrias escribir la siguiente funcion */

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
} // observa el uso de this para asignar valores a las propiedades del objeto en funcion de los valores pasados a la funcion

//....................2.1) ahora puedes crear un objeto llamado myCar de ka siguiente manera:

let myCar = new Car("Eagle", "Talon TSi", 1993);

console.log(myCar); // devuelve: Car { make: 'Eagle', model: 'Talon TSi', year: 1993 }

//ejemplo 2:

function Team(nombre, color, ciudad, año) {
  this.nombre = nombre;
  this.color = color;
  this.ciudad = ciudad;
  this.año = año;
}

let myTeam = new Team("Atletico de Madrid", "RojiBlanco", "Madrid", 1903);
console.log(myTeam);

// DEFINICION DE METODOS --> normalmente se definen como una funcion, con la excepcion de que tienen que ser asignados como la propiedad de un objeto

// objectName.methodname = functionName;

var myObj = {
  myMethod: function (params) {
    // ...hacer algo
  },

  // O ESTO TAMBIÉN FUNCIONA

  myOtherMethod(params) {
    // ...hacer algo más
  },
};

// USO DE THIS PARA REFERENCIAR OBJETOS -->  JS tiene una palabra clave especial, this, que puedes usar dentro de un metodos para referirte al objeto actual.

/*................Por ejemplo, supongamos que tienes 2 objetos,Manager e Intern. Cada objeto tiene su propio name, age y job.
 En la función sayHi(), observa que hay this.name. Cuando se agregan a los 2 objetos, se pueden llamar y devuelve el 'Hola, mi nombre es' y luego agrega 
 el valor name de ese objeto específico. Como se muestra abajo.*/

const Manager = {
  name: "Pepe",
  age: 21,
  job: "Developer",
};

const Intern = {
  name: "Ben",
  age: 30,
  job: "Engineer",
};

function sayHi() {
  console.log("Hola mi nombre es ", this.name);
}

//ahora agregamos la function  sayHi a ambos objetos como si fuera una nueva clave:

Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

//aqui llamamos a la funcion, si no lo hiciera no retornaria nada
Manager.sayHi();
Intern.sayHi();

/* this se refiere la objeto en el que se encuentra. Puedes crear 
una nueva funcion llamada howOldAmI() que refistra una oracion que dice cuantos años tiene la persona*/

function howOldAmI() {
  console.log("Tengo " + this.age + " años");
}

// Integro la funcion en el objeto como nueva clave
Manager.howOldAmI = howOldAmI;
Intern.howOldAmI = howOldAmI;
//llamo a la funcion para que imprima/devuelva en la consola
Manager.howOldAmI();
Intern.howOldAmI();

// DEFINICION CAPTADORES --> GETTERS & SETTERS

//.....un captador (GETTER) es un metodo que obtiene el valor de una propiedad especifica
//.....un establecedor (SETTER) es un metodo que establece el valor de una propiedad especifica
//.........puedes definir captadores y establecedores en cualquier objeto principal predefinido o en un objeto definido por el usuario que admita la adicion de nuevas propiedades

var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(o.a); // devuelve 7
console.log(o.b); // imprime 8 --> en este punto se inicia el metodo GET
o.c = 50; // --> en este punto se inicia el metodo SET c(x)
console.log(o.a); // imprime 25

// ELIMINAR PROPIEDADES DE UN OBJETO ---> puedes ELIMINAR una propiedad no heredada mediante DELETE:

// ejemplo: creamos un objeto, miObjeto, con 2 propiedades, a y b

var miObjeto = new Object();
miObjeto.a = 5;
miObjeto.b = 12;

// elimina la porpiedad a, dejando a miObjeto solo con la propiedad b

delete miObjeto.a;
console.log("a" in miObjeto); // imprime ''false''

// COMPARAR OBJETOS ---> 2 distintos objetos nunca son iguales, aunque tengan las mismas propiedades. Solo resultara verdadero el comparar la misma referencia de objeto consigo misma

//.....2 variables, 2 distintos objetos con las mismas propiedades
var fruit = { name: "apple" };
var fruitBear = { name: "apple" };

console.log(fruit == fruitBear); // imprime FALSE
console.log(fruit === fruitBear); // imprime FALSE

//....2 variables, un solo objeto

var fruit = { name: "apple" };
var fruitBear = fruit; // aqui estamos asignando la referencia del objeto fruit a fruitBear

// Aquí fruit y fruitbear apuntan al mismo objeto

console.log(fruit == fruitBear); // devuelve true

console.log(fruit === fruitBear); // devuelve true

fruit.name = "grape";
console.log(fruitBear); // Produce: { name: "grape" }, en lugar de { name: "apple" }

// USO DE ENTRIES PARA DEVOLVER UN ARRAY

/*..............El metodo Object.entries() nos permite generar un array cuyos elementos 
son arrays correspondientes a las claves y valores que tengan cada una de las propiedades de un objeto. El orden 
de este array será el mismo que el que tendriamos recorriendo el objeto manualmente*/

const character = {
  firstName: "James",
  lastName: "Bond",
  age: 50,
};

const agent = Object.entries(character);

console.log(agent); /*Retorna ->
[ 
	["firstName", "James"],
	["lastName", "Bond"],
	["age", 50],
	["code", 007]
]

*/
