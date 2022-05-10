//ESTRUCTURAS ITERATIVAS:

//WHILE:

//En esta estructura, una vez que la lectura del código entre,
//NO saldrá hasta que se deje de cumplir la condición
//vamos a solicitar un número
const numero = prompt('Ingrese un número');
let contador = 0;

while (contador<numero){
    console.log(contador);
    contador++;
}
//Entonces si ingreso el número 5, me devolverá: 0 1 2 3 4
//Debe dejar siempre una condición para evitar un bucle infinito

//EJEMPO PRÁCTICO: POR QUÉ LA LUNA ES MAYOR QUE EL SOL?
let respuesta = 'porque sale de noche';
let acierto = false; //pongo como condición inicial que arranque en false para que pueda ingresar en el while

while(acierto===false){
    let propuesta = prompt('Por qué la luna es mayor que el sol?');
    if(propuesta===respuesta){
        acierto=true;
    }else{
        alert('Seguí participando');
    }
}
alert('Acertaste');


//DO-WHILE: A diferencia del while, el código llega a ejecutarse una vez
let numero2 
do{
    numero2 = Number(prompt('Ingrese un número'));
}while(isNaN(numero2)==true);


//FOR: Funciona de namera bastante similar al while, ejecuta un código una determinada cantidad de veces
const numero3 = prompt('Ingrese un número');

for(let contador=0; contador<numero3; contador++){
    console.log(contador);
}
//Entonces al igual que en el ejemplo anterios,si ingreso el número 5,me devolverá: 0 1 2 3 4


//Ejemplo con Encontrar al rey Arturo con el prompt de Excalibur:

let nombre;
let esRey = false;

whilw(nombre !== 'Arturo || esRey !==true');{
    nombre = prompt('¿Cuál es tu nombre?');
    if (nombre ==='Arturo'){
        esRey=confirm('¿Sos Rey?');
        if(esRey===true){
            alert('Sacaste el Prompt');
        }else{
            alert('No podés participar porque no sos rey');
        }
    }else{
    alert('Seguí participando');
    }
};