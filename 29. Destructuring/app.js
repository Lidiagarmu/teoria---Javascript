/* DESTRUCTURING ---> es una característica de JavaScript que te permite extraer datos de arreglos o 
objetos en variables individuales. Esto puede ser útil cuando tienes una estructura de datos compleja y 
quieres acceder a sus valores de manera más fácil. */

//..Aquí hay un ejemplo de cómo se puede usar el destructuring para extraer valores de un array:

const colores = ["rojo", "verde", "azul"];
const [primerColor, segundoColor, tercerColor] = colores;
console.log(primerColor); // imprime 'rojo'
console.log(segundoColor); // imprime 'verde'
console.log(tercerColor); // imprime 'azul'

// Aquí hay un ejemplo de cómo se puede usar el destructuring para extraer valores de un objeto:

const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    ciudad: "Bogotá",
    pais: "Colombia",
  },
};

const {
  nombre,
  edad,
  direccion: { ciudad },
} = persona;
console.log(nombre); // imprime 'Juan'
console.log(edad); // imprime 30
console.log(ciudad); // imprime 'Bogotá'

/* En el ejemplo anterior, se extraen el nombre y la edad del objeto persona y se asignan 
a las variables nombre y edad, respectivamente. Además, se extrae la ciudad del objeto anidado direccion 
y se asigna a la variable ciudad. */

// También puedes usar el destructuring en la asignación de parámetros de una función. Por ejemplo:

function imprimirInfo({ nombre, edad }) {
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}

imprimirInfo(persona); // imprime 'Hola, me llamo Juan y tengo 30 años.'

/* 
 En este ejemplo, se pasa el objeto persona como argumento a la función imprimirInfo. Dentro de la función, 
 se usa el destructuring para extraer el nombre y la edad del objeto y se imprimen en pantalla.*/

// OBJECT DESTRUCTURING ----> me permite extraer de manera rapida ciertos valores de un objeto

let marvelCharacter = {
  name: {
    heroName: "Doctor Strange",
    humanName: "Stephen Vincent Strange",
  },
  team: ["Avengers", "Iluminati"],
};

// Destructuring - Ejemplo 1
let { name, team } = marvelCharacter;

// Podemos acceder a las propiedades sin el marvelCharacter -> ya asignado.
console.log(name.heroName, name.humanName); //----imprime   Doctor Strange Stephen Vincent Strange
console.log(team[0], team[1]); //-----imprime    Avengers Iluminati

// Destructuring - Ejemplo 2
let { heroName, humanName } = marvelCharacter.name;

console.log(heroName); // Doctor Strange
console.log(humanName); // Stephen Vincent Strange
