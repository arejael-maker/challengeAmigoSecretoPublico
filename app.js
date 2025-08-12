// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
  
//Declaración de variables globales
   let amigos=[]; 
   let listaAmigosSorteados = [];
   let amigoSorteado;

//Función para leer amigos
function leerAmigos() {
 
    let nombre = document.getElementById('amigo').value;  
    
if(nombre.trim() === ""){
         alert("Ingresa un nombre valido");
         
    } else {
        amigos.push(nombre.trim()); 
       
    }
    //console.log(amigos);
    limpiarCaja();
}

//Función para limpiar 
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Función para le sorteo
function sortearAmigo(){

let numeroGenerado; 
   // console.log(numeroGenerado);
   // console.log(listaAmigosSorteados);
   if(amigos.length != 0)
    document.querySelector('#annade').setAttribute('disabled','true');
    //Si ya sorteamos todos los amigos
    if ( listaAmigosSorteados.length == amigos.length) {
        alert("Ya se seleccionaron todos los amigos secretos");
    } else {
      
        do{
         numeroGenerado =  Math.floor(Math.random()* amigos.length)+1; 
          }  while(listaAmigosSorteados.includes(numeroGenerado-1))
    
        listaAmigosSorteados.push(numeroGenerado-1); 
        alert(`Tu amigo secreto es: ${amigos[numeroGenerado-1]}`);
         return;
           
           }
}