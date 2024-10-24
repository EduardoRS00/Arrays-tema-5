let combinaciones = [];

for (let i = 0; i < 50; i++) {
    let combinacion = new Set(); 
    while (combinacion.size < 6) {
        let numero = Math.floor(Math.random() * 49) + 1; 
        combinacion.add(numero); 
    }
    
    combinaciones.push(Array.from(combinacion)); 
}

for (let valor of combinaciones) {
    console.log(valor.sort((a, b) => a - b).join(', ')); 
}

