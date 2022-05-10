//FUNCIONES: también conocidas como procedimientos o métodos

//Nos sirven para que una vez creadas,podamos utilizarlas en diferentes partes
//y varias veces, cada vez que las necesitamos
//Puede recibir datos de entrada que son: ARGUMENTOS
//Puede devolver datos de salida

//Existen tres formas de escribirlas:

//1)FUNCIONES DECLARATIVAS:

function hello(){
    console.log('Hola Mundo');
    return 'Hola Mundo'
};


//2)FUNCIONES ANÓNIMAS:

const hello = function (){
    console.log('Hola Mundo');
    return 'Hola Mundo'
};


//3)ARROW FUNCTIONS:

const hello = () => {
    console.log('Hola Mundo');
    return 'Hola Mundo'
};


//FUNCIONES CALLBACK: Es una función que se pasa a otra función como un argumento,
//que luego se invoca dentro de la función externa para completar alguna acción.

function hello (nombre){
    alert('Hola' + nombre);
}
function ingreso (funcion){
    let nombre = prompt('Ingrese su nombre');
    funcion (nombre);
}
ingreso(hello);