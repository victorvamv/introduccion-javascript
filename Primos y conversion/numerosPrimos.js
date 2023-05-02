/*12) Programa una función que determine 
si un número es primo (aquel que solo es divisible por sí mismo y 1) 
o no, pe. miFuncion(7) devolverá true. */ 
function primos(numero){
    let x = 2

    let primo = true
    while(primo === true)
        conseguirPrimo = numero % x++
        
        if(conseguirPrimo != 0){

            console.log(`${numero} es primo`)
            primo == false
        }else{
            
            console.log(`${numero} no es primo`)
        }                           
} 
primos(6)