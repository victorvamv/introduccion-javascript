/* Programa una función que reciba un número 
y evalúe si es capicúa o no (que se lee igual 
en un sentido que en otro),
 pe. miFuncion(2002) devolverá true. */
function ingresa(){
    let ingresarNumero = Number(prompt("Ingresa un número entero"))
    return ingresarNumero
}
 
function invirtiendoNumeros(){
    const numero = ingresa()
    try {
        if (Number.isInteger(numero)) {
           const numeroInvertido = numero.toString().split("").reverse().join("")
            console.log(numeroInvertido)
            console.log(numero)
            console.log(numero == numeroInvertido) 
        }else{
           throw Error
        }
    } catch (error) {
        alert("Ingresa un número entero")
        invirtiendoNumeros()
    }
}
invirtiendoNumeros()