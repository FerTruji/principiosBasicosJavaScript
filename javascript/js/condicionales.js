//CONDICIONALES: 


/*CONDICIONAL SIMPLE:
CONDICIONALES:
  if(condicion){
      ejecuta ésto
  }*/

/*Ejemplo de condicionales, si el usuario trae anteojos podrá ser
advertido, sino, caerá en la estafa
El .toLowerCase es para evitar inconvenientes con mayúsculas o minúsculas
que pueda ingresar el usuario en e prompt*/

const anteojos1 = prompt('¿Trajiste anteojos?');
if(anteojos1.toLowerCase==='si'){
    alert('Letra chica: Cuidado-fraude');
}


//CONDICIONALES DOBLES:

/*if(condicion){
      ejecuta ésto
  }
  else{
      ejecuta esta otra opción
  }*/


//MÚLTIPLES CONDICIONALES:
const  anteojos2 = prompt('¿Trajiste anteojos?');
if(anteojos.toLowerCase()!=='si' && anteojos.toLowerCase()!=='no'){
    alert('Por favor, contesta si o no');
}else{
    if(anteojos2.toLowerCase==='si'){
        alert('Letra chica: Cuidado-fraude');
  };
};

//CONDICIONAL ELSE IF:

const anteojos3 = prompt('¿Trajiste anteojos?');
if(anteojos.toLowerCase()!=='si' && anteojos.toLowerCase()!=='no'){
    alert('Por favor, contesta si o no');
}else if(anteojos3.toLowerCase==='si'){
    alert('Letra chica: Cuidado-fraude')
};


//PARES E IMPARES:

let numero = Number(prompt('Ingrese un numero'));

if(numero%2==0){
    alert('El número es par')
}else{
    alert('El número no es par')
};

//EJEMPLO PRÁCTICO: INGRESO A LA FIESTA POR EDAD
//OPCIÓN 1:

let edad1 = Number(prompt('¿Cuál es tu edad?'));

if(edad>=18){
    alert('Bienvenido, difrute la fiesta');
}else(edad<18);{
    alert('Necesitas de un tutor para ingresar');
}

//OPCIÓN 2:
let edad2 = Number(prompt('Cuál es tu edad?'));
if(edad>=18){
    alert('Disfrute la fiesta');
}else{
    let tutor = prompt('Tienes tutor?');
    if(tutor.toLowerCase()=='si'){
        alert('Disfruten la fiesta');
    }else{
        alert('No puedes ingresar, eres menor de edad');
    }
}

//CONDICIONALES MÚLTIPLES-SWITCH: En este caso comparamos una variable con todos los casos posibles
//cuando alguno coincida,se ejecuta su código correspondiente
//Ejemplo práctico con Provincias de Argentina:

const provincia = prompt('¿De qué provincia sos?');

switch(provincia){
    case'Tucuman':
      alert('Las mejores empanadas');
     break;
     case'Cordoba':
      alert('Buen Fernet');
     case 'Buenos Aires':
      alert('Gran ciudad');
     break;
     default:
      alert('Que provincia aburrida');
    break
};



