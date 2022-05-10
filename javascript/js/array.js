//ARRAYS: también conocidos como arreglos o listas
//Son una LISTA ORDENADA DE DATOS, encerrada entre corchetes y separados por coma ( , )
//Los datos pueden ser de cualquier tipo (número, string, boolean, otro array)
//La posición siempre comienza en cero

//Ejemplo: Creamos un array de los días y los mostramos en consola a uno por uno

const days = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

for(let i=0; i<days.length; contador++){
    console.log(days[i]);
}

//Ejemplo: Estudiantes de una comisión

let students = ['Pablo','Oscar','Martín'];
students[2]='Lucas'; //cambié a Oscar por Lucas

//AGUNAS PROPIEDADES Y MÉTODOS:

students.push('Camila'); //agrega a Camila como un nuevo elemento
students.pop(); //elimina el elemento del final-en éste caso va a ser eliminada Camila
students.unshift('Marcos'); //agrega un elemento a inicio del array

students.shift(); //elimina el elemento de inicio del array "y lo devuelve"

students.indexOf(x); //devuelve la posición o índice del elemento x

students.reverse(); //invierte el orden del array

students.concat(array2); //concatena dos arrays

students.includes(x); //devuelve true si el array contiene a x

students.join(''); //devuelve todos los elementos en un string,especificando el separador

students.sort();  //ordena el array alfabéticamente


//PROPIEDADES Y MÉTODOS UN POCO MÁS COMPLEJOS:

array.splice(x,y,z);   //desde la posición "x", corta "y" elementos y los reemplaza con "z" y lo devuelve
                      //y z son opcionales
array.slice(x,y);    //hace lo mismo que splice, pero NO MODIFICA el array original
                    //y es opcional
array.filter(x=>condición); //crea un nuevo array con todos los elementos que cumplan la
                    //condición implementada por la función dada
array.find(x =>condición); //devuelve el valor del primer elemento del array que 
                           //cumple la función de prueba proporcionada