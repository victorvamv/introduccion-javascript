const texto = "En Pekin se produjo un cambio monumental"
   
function limiteTexto(texto){
    const limite = Number(prompt("Ingresa un numero"))
    try {
        if(Number.isInteger(limite)) {
        console.log(texto.slice(0, limite))  
    }else{
        throw Error
    }         
    } catch (error) {
        console.log("Se produjo un error vuelve a ingresar")  
        limiteTexto(texto)         
    }    
}
console.log(texto.length) 
limiteTexto(texto)