
const prompt = require('prompt-sync')();

const entrada = prompt('Ingrese un número entero: ');
const numeroUsuario = parseInt(entrada);

function FizzBuzz(numero){

let x = 0
let listaNumeros = new Array(numero)
    
    for (let index = 0; index < listaNumeros.length; index++) { 
        x = x + 1
        let suma = x 
        listaNumeros[index]= suma
        
        let modulo = listaNumeros[index] % 3
        let modulo2 = listaNumeros[index] % 5
        if (modulo == 0 && modulo2 == 0) {
            listaNumeros[index] = "FizzBuzz" 
        } else if (modulo2 == 0) {
            listaNumeros[index] = "Buzz"
        } else if(modulo == 0) {
            listaNumeros[index] = "Fizz"
        }
        
    }
    console.log(listaNumeros)
}

FizzBuzz(numeroUsuario)





