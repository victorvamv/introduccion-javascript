let x = 0

let listaNumeros = new Array(10)
for (let index = 0; index < listaNumeros.length; index++) {
    let suma = listaNumeros[index];  
    x = x + 1
    suma = x
    listaNumeros[index]= suma
    console.log(suma)  
    listaNumeros[2] = "Fizz"
}

console.log(listaNumeros)




