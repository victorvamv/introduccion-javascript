// :D
function contarPalabras(buscar){
    const palabras = "Space Reader Optimized Screen Space Reader Reader"
    const words = palabras.split(" ")
    let contador=0
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(buscar) == true) {
            contador++   
        }      
    }
    if(contador > 0){
        console.log(`Existen ${contador} coincidencias para la palabra ${buscar}`) 
    }else{
       console.log(`No se encontro ninguna palabra que coincida con la palabra ${buscar}`) 
    }
}
contarPalabras("Reader23")