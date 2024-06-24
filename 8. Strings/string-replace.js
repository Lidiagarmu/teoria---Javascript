const sentence = " Because i'm happy";

console.log(sentence.replace("happy", "unhappy"));

const myNewSentence = sentence.replace("happy", "unhappy"); // --> aqui es donde realmente le cambiamos el valor creando una nueva varible con cons

//-------------replaceAll.

const otherSentence = "Simio no mata a Simio";

console.log(otherSentence.replace("Simio", "Monkey")); // con replace. solo cambia la primera palabra que se encuentre de Simio. Muestra "Monkey no mata a Simio"
console.log(otherSentence.replaceAll("Simio", "Monkey")); // muestra "Monkey no mata a monkey",. Reemplaza todas las palabras Simio de la sentence
