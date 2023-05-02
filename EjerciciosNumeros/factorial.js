/* Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto 
de todos los números enteros positivos desde 1 hasta n), 
pe. miFuncion(5) devolverá 120. */
alert("Ingresa un numero entero para obtener su factorial")
function ingresarNumero(){
    let ingresa = Number(prompt("Ingresa el numero"))
    return ingresa
}

function numeroVerificar(){
const obtenerNumero = ingresarNumero()
    try {
        if(Number.isInteger(obtenerNumero)){
            factorial(obtenerNumero)
        }else{
            throw Error
        }
    } catch (error) {
        console.log("¡¡Ingresa un numero entero!!")
        numeroVerificar()
    }
}

function factorial(num){
    let numfactorial = 1
    for(let x = 1; x <= num; x++){
    numfactorial = numfactorial * x
    }
    console.log(numfactorial) 
}

