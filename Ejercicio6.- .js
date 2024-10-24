const personas = new Map();
personas.set('pepe', 23);
personas.set('Mar' ,43);
personas.set('manolo', 45);
personas.set('eduardo', 87);
personas.set ('paco' , 56);

//actualizamos paco
personas.set ('paco', 45);

for (let elemento of personas){
    console.log(elemento);
}