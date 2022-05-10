//CALCULADORA:

let num1 = Number(prompt('Ingrese un número'));
let op = prompt('Ingrese la operación que desea realizar');
let num2 = Number(prompt('Ingrese el otro número'));

function calculadora(num1,num2,op){
    switch(op){
        case '+':
            return num1 + num2;
    
        case '-':
            return num1 - num2;
        
        case '*':
            return num1 * num2;
        
        case '/':
            return num1 / num2; 

        default:
            return 'Operación no válida';           
    }
}
console.log(calculadora(num1, num2, op));


//PIEDRA, PAPEL O TIJERA:

const opciones =['piedra', 'papel', 'tijera'];

function bot(){
    let jugada = Math.round(Math.random()*2);
    return jugada;
};
function player(){
    let jugada = prompt('Ingrese: piedra, papel o tijera');
    jugada = opciones.indexOf(jugada);
    return jugada;
};
function definicion(bot, player){
    switch (true){
        case bot===player:
            console.log('EMPATE');
        break;
        case bot===0 && player===1:
            console.log('GANO EL PLAYER');
        break;
        case bot===0 && player===2:
            console.log('GANO EL BOT');
        break;
        case bot===1 && player===0:
            console.log('GANO EL BOT');
        break;
        case bot===1 && player===2:
            console.log('GANO EL PLAYER');
        break;
        case bot===2 && player===0:
            console.log('GANO EL PLAYER');
        break;
        case bot===2 && player===1:
            console.log('GANO EL BOT');

    };
};