let frecuencias = {};

for (let i = 1; i <= 10; i++) {
    frecuencias[i] = 0;
}

for (let i = 0; i < 10000; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un número entre 1 y 10
    frecuencias[numeroAleatorio]++;
}

console.log("Frecuencias:");
for (let i = 1; i <= 10; i++) {
    console.log(`Número ${i}: ${frecuencias[i]}`);
}

