// los booleanos tambien se pueden utilizar en las estructuras de control de flujo, como los if y los while. Por ejemplo
let number = 5;
if (number > 6) {
  console.log("5 es mayor");
} else {
  console.log("5 es menor"); // en este caso la expresion number > 6 es false por lo que se ejecuta el codigo dentro del bloque else
}

//los booleanos tambien se pueden utilizar en operaciones logicas, como and, or y not. Por ejemplo:

let a = true;
let b = flase;
console.log(a && b); //false . Aqui devuelve false porque ambos operadores son booleanos y uno de ellos es false
console.log(a || b); //true. devuelve true porque al menos uno de ellos es true
console.log(!a); //false. devuelve false ya que el operador ! invierte el valor booleano de su operando
