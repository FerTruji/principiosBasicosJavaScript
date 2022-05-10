//Math: Para trabajar con números 

//Redondear un número:
let numRedondeado1= Math.floor( );

//Truncar un número:
let numRedondeado2= Math.round( );

//Encontrar máximos y mínimos:
let maximo = Math.max ( );
let minimo = Math.min( );

//Potencias y raíces:
let cuadrado = Math.pow( );
let cubo = Math.pow( );

let raiz = Math.sqrt ( );

//Crear Números aleatorios:
let aleatorios= Math.random( );
//ejemplo para obtener un número aleatorio del cero al diez sin decimales
let aleatorios2 = Math.floor(Math.random()*10);

//Parsear cadenas (para que un string se convierta en número): ejemplo
let cadena ='123';
let cadenaParseada1 = parseInt(cadena);
//en el console.log el 123 aparecerá como número y no como string
//otras formas
let cadenaParseada2 = parseFloat(cadena);
let cadenaParseada3 = Number(cadena);

//imitar la cantidad de números decimales:
let numeroMolesto = 123.569871456464613
console.log(numeroMoesto.toFixed(2));
//me dará como resultado un número con solo dos después del punto en el ejemplo será el 123.56