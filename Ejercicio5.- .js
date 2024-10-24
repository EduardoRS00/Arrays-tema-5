let numeros = [2, 3, 4, 5, 5, 456, 5, 7];

let numerosnoRepetidos = new Set(numeros);

let num = Array.from(numerosnoRepetidos);

for(let valor of num){
    console.log(valor);
}
