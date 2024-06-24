const stringObject = new String("foo");

const stringObjectOther = { string: "foo" }; // FILA 3 Y 5 es lo mismo escrito diferente

console.log(stringObject); // muestra el objeto entre [] y se refiere a oye hay un objeto con la propiedad foo

console.log(stringObject.valueOf()); // nos sac directamente la propiedad o el valor de un objeto o una variable
