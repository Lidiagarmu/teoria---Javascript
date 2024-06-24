// los datos de tipo primitivo number representan valores numericos enteros, negativos y decimales

const age = 30;
const temperature = -3;
const budget = 20.4;

/* algun metodo:
1)isNaN
2)isInteger
3)parseInt
4)parseFloat
5)toString */

// isNaN (Not a Number)--> determina si el valor es de tipo number o no. Si no es numero devolver TRUE y si detecta un numero o un valor convertible en numero devovlera false

isNaN(true); // true
isNaN("hola"); // false
isNaN(10); // false
isNaN("12"); // false

// isInteger --> indica a traves de un booleano si el valor pasado es un num entero, si no nos devolvera false

const integer = 20;
const decimal = 12.5;

Number.isInteger(integer); // true
Number.isInteger(decimal); // false

// parseInt --> convierte valor de tipo string a numero entero

const edad = "18";
const edadANumero = parseInt(edad);
console.log(edadANumero); // retorna 18 en formato number

// parseFloat --> es muy parecidoa parseInt, pero convierte si fuera necesario un valor de tipo string a un numero decimal si encontrara un punto en el mismo

const budgett = "1.250";
const budgettInFloat = parseFloat(budgett);
console.log(budgettInFloat); // Retorna 1.25 en número decimal

// toString (base) --> devuelve la representacion numerico en una cadena, en el sistema numerico con la base especificada

let num = 255;

alert(num.toString(16)); //ff
alert(num.toString(2)); // 11111111
