let contador = 0, resultado = 1; 
let base = Number(prompt('ingresa la base:'));
let exponente = Number(prompt('ingresa el esponente'));

while(contador <= exponente){
  resultado = base * resultado;
  contador++;
}

console.log('El resultado es: ' + resultado);