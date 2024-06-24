const str = "The quick brown box jumps over the lazy dog";

const words = str.split(" "); // va a mostrar en terminal la sentence separada en bloques justo por los espacios que es donde le he indicado que fragmente

console.log(words);

const newWords = str.split("c"); // en este caso fragmentará donde aparezcan letras "c" . Es mas facil atacar el codigo por separado que en su conjunto de ahi la importancia de este METODO
// este metodo devuelve un array. El elemento en el cual quieres que corte se lo carga. Nomalmente suelen ser " " espacios
console.log(newWords);
