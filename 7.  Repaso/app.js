/* OPERADOR DE ASIGNACION:
 
Asignacion               x = y 
Asignacion Adicion       x+= y (es decir, x = x + y) 
Asignacion Resta         x-= y (es decir, x = x - y)
" " Multiplicacion       x*= y
" " Division             x/= y 
" " Residuo (resto)      x%= y
" " AND bit a bit        x &= y 

//---------------------------------------------------------------------------------------


*/

/* OPERADORES DE COMPARACION:

let x = 3;
let y = 5;


1.Igual (==) Retorna TRUE si son iguales

3 == x;
"3" == x;
"3" == 3;

2. No es Igual (!=) Retorna TRUE si NO son iguales

x != 4;
x != "4";

3. Estrictamente Igual (===) retorna TRUE si coincide en VALOR y TIPO 

3 === x;

4. Desigualdad Estricta (!==)   retorna TRUE si estos no coinciden en tipo o valor

x !== "3";

5. Mayor que (>) retorna TRUE si el operador izdo es mayor

y > x;

6. Menos que (<) retorna TRUE si el operador izdo es menor
7. Mayor o igual (>=) Devuelve TRUE si el operador izdo es mayor o igual
8. Menor o igual que (<=) devuelve TRUE si el operador izdo es menos o igual

*/

//---------------------------------------------------------------------------------------

// OPERADORES LOGICOS:

//operador OR representado por || . devuelve TRUE si unos de los valores combinados es TRUE

var tengoEfectivo = true;
var tengoTarjeta = false;
var puedoPagar = tengoEfectivo || tengoTarjeta;
console.log(puedoPagar); // ---> devuelve TRUE porque tengo EFECTIVO

// operador AND representado por && , este devuelve TRUE si todos los valores combinados son verdaderos

var tengoCoche = false;
var tengoCarnetDeConducir = true;
var puedoConducir = tengoCoche && tengoCarnetDeConducir;
console.log(puedoConducir); // ----> me devuelve FALSE porque no tengo coche

// operador de negacion representado por !  se usa para negar el valor de una expresion, es decir, darle el valor opuesto

!true; // --> devuelve FALSE

// OPERADOR CONDICIONAL

// es el unico operador de javascript que toma 3 operandos. El operador puede tener uno de dos valores segun la condicion

//sintaxis:  condicion ?val1 :val2     ---> Si la condicion es TRUE, el operador tiene el val1. Si no, val2

//ejemplo 1

var edad = 13;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Ohh! Stop dont pass");
} // ---> devuelve '¡Ohh! Stop dont pass'

// ejemplo 2
var status = age >= 18 ? "adult" : "minor";
var age = 10;
console.log(status); // ---> devuelve 'minor'

// OPERADOR POR AGRUPACION ---> Controla la precendencia de la evaluacion en las expresiones.

let a = 1;
let b = 5;
let c = 3;

a + b * c; // 8 --> evaluado por omisión así

(a + b) * c; // 18 --> prevalece sobre lo que precede

a * b + b * c; // 9

// OPERADORES UNARIOS --> Esta es una operacion con un solo operando. Dentro de esta operacion nos podemos enontrar: delete, typeof o void

// delete --> este elimina la propiedad de un objeto
/* en el siguiente ejemplo object es el nombre de un objeto,  property es una propiedad existente y propertyKey es una cadena o simbolo que 
hace referencia a una propiedad existente*/

var object = "rosa";
var propertyKey = "metal";
objectName = "Lucia";
var index = "0";

delete object.property;

delete object[propertyKey];

delete objectName[index];

delete property; // solo si es dentro de una declaracion with

/* Si el operador delete tiene éxito, elimina la propiedad del objeto. Intentar acceder a él después dará como resultado undefined. 
El operador delete devuelve true si la operación es posible; devuelve false si la operación no es posible*/

console.log(object);
// typeof --> este devuelve el tipo que es la variable. ejemplo:

var myFun = new Function("5" + "3");
var size = 1;
var food = ["Appel", "Banana", "Mango"];
var today = new Date();

console.log(object);

typeof myFun;
typeof size;
typeof food;
typeof today;

console.log(typeof size);
console.log(typeof food);
console.log(typeof today);
console.log(typeof noExiste);
console.log(typeof true);
console.log(typeof null);
