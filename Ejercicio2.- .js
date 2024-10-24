//Inserta al principio del array las letras A, B y C
let letras = ["A","B", "C"];

//Luego, inserta al final las letras D y E
letras.push("D", "E;");

//Finalmente, elimina el primer elemento y el último
letras.shift();
letras.pop();

//imprime el array final
console.log(letras);

