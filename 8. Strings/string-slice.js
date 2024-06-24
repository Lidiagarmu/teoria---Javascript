const sentence = "Pedro está muy concentrado";

console.log(sentence.slice(0, 5)); //muestra "Pedro".

//---------------------COMBINACION DE METODOS------------------------------------

//Ahora quiero cambiar Pedro pero no quiero escribir Pedro.Ya se que está en la primera posicion . Ahora concatenamos los metodos

console.log(sentence.replace(sentence.slice(0, 5), "Juan"));
// Utilizo un replace y el primer parametro que le pasamos que encuentre en slice(0,5) que es Pedro, lo sustituya por Juan

const myNewSentence = sentence.replace(sentence.slice(0, 5), "Juan"); // lo guardamos en un nuevo elemento y consoleamos la nueva variable puesto que antes solo hemos echo console.log

console.log(myNewSentence); // muestra "Juan está muy concentrado"
