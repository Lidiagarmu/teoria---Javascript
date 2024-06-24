// indica la longitud de nuestro elemento

const sentence = "Hola";

//length --> NO es un metodo es una propiedad

/* ------------------------DIFERENCIA ENTRE METODO Y PROPIEDAD------------------
metodo-->  .nameMethod()
propiedades --> .nameProperty        */

console.log(sentence.length); // muestra 4

//que no es lo mismo la longitud que la posicion. La posicion empieza por 0 y length por 1

//APUNTE: PARA ACCEDER A UNA CLASE PONEMOS . (un punto)

const myClassExample = {
  name: "Javascript",
  students: 20,
  isOnline: true,
  studentsName: ["Jorge", "Juan", "Pedro"], //array de nombres
  enterStudents: (list) => {
    //funcion que se ejecuta
    console.log(list);
  },
};
myClassExample.enterStudents(["Jorge", "Juan", "Pedro"]);

// para ejecutar el metodo
//myClassExample.name; //asi seria para acceder a una propiedad del objeto
