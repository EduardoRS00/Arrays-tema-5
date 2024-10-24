// Paso 1: Crear el array original
let data = [
  { name: 'Nacho', telephone: '966112233', age: 40 },
  { name: 'Ana', telephone: '911223344', age: 35 },
  { name: 'Mario', phone: '611998877', age: 15 },
  { name: 'Laura', telephone: '633663366', age: 17 },
];

// Paso 2: Añadir dos nuevos elementos al final
data.push(
  { name: 'Pedro', telephone: '611944444', age: 25 },
  { name: 'Julia', phone: '633232323', age: 37 }
);

// Paso 3: Imprimir cada objeto dentro del array
for(let elemento of data){
    console.log(elemento);
}

//ordenar de menor a mayor edad
data.sort((a, b) => a.age - b.age);


for (let elemento of data) {
  console.log(elemento);
}

//ordenar por nombre
data.sort((a, b) => a.name.localeCompare(b.name));

for(let elemento of data){
    console.log(elemento);
}


//mayores de 30
let mayores30 = data.filter(p => p.age > 30);

for (let elemento of mayores30){
  console.log(elemento);
}

