const sentence = "Yo soy tu padre";

const searchWord = "padre";

console.log(
  `The word ${searchWord} exist in sentence ${sentence.indexOf(searchWord)}`
);

//muestra "The word exist in sentence 10" --> la posicion en la que aparece

// EXISTE OTRO QUE ES MUY PARECIDO que es lastIndexOf que indica la ultima vez que aparece:

const sentenceRepeatWord = "Yo soy tu padre, tu padre, tu padre";

console.log(
  `The word ${searchWord} exist in ${sentenceRepeatWord.lastIndexOf(
    searchWord
  )}`
); // muestra en terminal "The word exist in 30 "
