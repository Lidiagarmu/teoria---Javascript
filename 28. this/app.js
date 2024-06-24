// THIS es una palabra clave en JS que se refiere al objeto en el contexto actual. El valor de this puede cambiar dependiende en el contexto en el que se utiliza

//......en el contexto de un metodo de un objeto:¡, this se refiere al objeto al que pertenece el metodo

let obj = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
// aqui abajo llamo a la funcion para que se imprima en consola, sino no hace nada
obj.greet(); // 'Hello, my name is John'

//También puedes usar this en una función anónima que se pasa como un argumento a otra función. En este caso, this se refiere al objeto que se ha pasado como argumento.

let objet = {
  name: "John",
};

setTimeout(function () {
  console.log(`Hello, my name is ${this.name}`);
}, 1000); // imprime 'Hello, my name is undefined' ya que por el momento no se está refiriendo al objet de L16. se está refiriendo al objeto global en ese contexto

// BIND() ||CALL() || APPLY() --> Son metodos que se pueden usar con la palabra clave THIS en JS para cambiar el contexto en el que se ejecuta una funcion

/*--------------------METODO  BIN()--------------> Se utiliza para crear una nueva funcion a partir de una funcion existente, fijando el 
valor THIS al objeto especificado. La nueva funcion se puede utilizar en cualquier momento , incluso en un contexto diferente al que se creo*/

let objeto = {
  name: "Pep",
};
let greet = function () {
  console.log(`Hola, mi nombre es ${this.name}`);
}.bind(objeto); //------imprime `hola mi nombre es Pep`..........Si no usar .bind(objeto) imprimiria `Hola mi nombre es undefined`puesto que no lo relacion con el objeto "let objeto" al estar fuera

greet();

/*--------------------METODO CALL()----------------> Se usa para llamar a una funcion con un valor especifico para this,
y quq puede pasar argumentos adicionales a la funcion a traves de los parametros*/

let objee = {
  name: "Carlos",
};

let saludos = function (greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
};

saludos.call(objee, "Hello"); // 'Hello, my name is John'

/*-------------------METODO APPLY()--------------> Es similar a call(), pero se usa para pasar argumentos a la 
funcion como un array en lugar de como una lista separada por comas*/

let objetito = {
  name: "Lidia",
};

let greeti = function (greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
};

greeti.apply(objetito, ["Hello"]); // 'Hello, my name is John'

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

// ejemplos de como se pueden usar bind(), call() y apply() en una aplicacion REAL:

//................BIND() : Se puede usar para crear una nueva funcion que tenga un valor de this fijo para su uso posterior:

let team = {
  name: "Atleti",
  age: 1903,
};

//ahora creamos una nueva funcion que muestra el nombre y la edad del equipo

let showTeam = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}.bind(team);

//ahora podemos usar la funcion nueva en cualquier momento
showTeam(); // imprime: "Name: Atleti, Age: 1903"

//...................CALL() : Se puede usar para llamar a una funcion con un valor de THIS especifico y pasar argumentos adicionales a la funcion:

let obj1 = {
  name: "Ana",
  age: 30,
};

let obj2 = {
  name: "Jess",
  age: 35,
};

let showPerson = function (greeting) {
  console.log(
    `${greeting}, my name is ${this.name} and I am ${this.age} years old`
  );
};

// Podemos usar call() para llamar a la función con diferentes valores de this y argumentos
showPerson.call(obj1, "Hello"); // 'Hello, my name is John and I am 30 years old'
showPerson.call(obj2, "Hi"); // 'Hi, my name is Jane and I am 35 years old'

//.................APPLY() : Se puede usar de la misma manera que call(), pero se usa para pasar los argumentos a la funcion como un array en lugar de como una lista separada por comas:

let obj3 = {
  name: "Carmele",
  age: 90,
};

let obj4 = {
  name: "Joselu",
  age: 69,
};

let showPerson2 = function (greeting, exclamation) {
  console.log(
    `${greeting}, my name is ${this.name}${exclamation} and I am ${this.age} years old`
  );
};

// Podemos usar apply() para llamar a la función con diferentes valores de this y argumentos
showPerson2.apply(obj3, ["Hello", "!"]); // 'Hello, my name is John! and I am 30 years old'
showPerson2.apply(obj4, ["Hi", "!"]); // 'Hi, my name is Jane! and I am 35 years old'
