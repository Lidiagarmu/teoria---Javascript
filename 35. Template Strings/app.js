/* template strings() --> son una forma de crear cadenas de texto con una sintaxis mas comoda y legible que las
cadenas de texto normales.
En lugar de usar comillas simples o dobles para delimitar la cadena se usan BACKTICKS(`)

Además, las template strings permiten la interpolación de expresiones mediante el uso de placeholders 
de la forma ${expresión}. Por ejemplo:
*/

const nombre = "Juan";
const edad = 30;
const saludo = `Hola, me llamo ${nombre} y tengo ${edad} años`;

console.log(saludo); // Imprime "Hola, me llamo Juan y tengo 30 años"

/* !!!!!! También puedes usar template strings para crear cadenas de texto multilínea,
 simplemente alineando el texto a la izquierda y usando backticks para delimitar la cadena */

const poema = `
A ti, mi amado,
que con tu sonrisa
llenas mi vida
de luz y alegría.
`;

console.log("Lidi: ", poema);

let name = "Lau";
let job = "Frontend Developer";

// vieja escuela
console.log("my name is " + name + "and my job is " + job);
// en la actualidad
console.log(`mi nombre es ${name} y mi trabajo es ${job}`);
