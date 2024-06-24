const x = new Boolean(); // la inicializamos sin valor

console.log(x.valueOf()); // muestra FALSO por defecto al no estar definido el valor

const y = new Boolean("Juan");

console.log(y.valueOf()); // muestra TRUE porque le estoy definiendo un valor "Juan"
