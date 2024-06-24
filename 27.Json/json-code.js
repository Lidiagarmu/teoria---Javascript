/* METODO json es un formato de lectura de datos y lo devuelve en formato de string. Es de uso diario. Es decir, es un formato
de texto que se usa para representar datos estructurados en la forma de objetos*/

const myUsers = { name: "Alice", age: 40 };

console.log(myUsers); //muestra clave y valor pintado de color, clave y valor . No lo muestra en forma de string

console.log(JSON.stringify(myUsers)); // al escribir JSON. estoy entrando en el tipo
//muestra en terminal --> {"name":"Alice","age":50} en forma de string

// Podria ser:

console.log(JSON.stringify({ name: "Peter", age: 10 })); // muestra tambien en formato String

/* Un objeto JSON se representa como una serie de pares clave-valor separados por comas, con las claves entre comillas dobles
y los valores pueden ser de cualquier tipo, incluyendo numeros, cadenas de texto, booleanos o incluso otro objeto o matriz.
Las matrices se representan como una lista de valores separados por comas, entre corchetes. Esta sintaxis debe cumplir las siguientes normas:
      -   Los datos estan definidos mediante nombre/valor
      -   Los datos estan separados por comas
      -   Las llaves contienen objetos.
      */

("main");
"Paul Atreides", "family";
[
  { firstName: "Leto", lastName: "Atreides" },
  { firstName: "Lady", lastName: "Jessica" },
  { firstName: "Alia", lastName: "Atreides" },
]; // esto es un mini ejemplo de json. En lugar de ; iria : pero no puedo escribirlo al ser un json y necesitar extension de archivo .json

/*..estos datos son accesibles mediante los metodos tradicionales en JS, permitiendo almacenar todos los datos que 
queramos, consultarlos, modificarlos o editarlos. (Vease en los archivos .json de esta carpeta)*/

//--------------------------------------------------------
//--------------------------------------------------------

// --METODOS---

//..JSON.parse() --> este metodo nos permite convertir un objeto JSON en un objeto legible por JavaScript que podrá ser usado en la aplicacion

const char = JSON.parse('{"name":"Steve", "age":140, "city":"New Jersey"}');

/*--JSON.stringify() --> este metodo convierte un objeto o valor de JS en un string JSON. Esto es bastante util
para almacenar datos, claves o pintar informacion que de otra manera no se podria, como por ejemplo,
almacenar JSON en el localStorage */

console.log(JSON.stringify({ name: "Jhon", surname: "Snow" })); // retorna "{"name":"John", "surname": "Snow"}
