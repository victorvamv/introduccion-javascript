const str = prompt("Agrega una frase")
    function mensaje(saludo) {
        const separacion = saludo.split(" ")
        const miLista = []
        for (let i = 0; i < separacion.length; i++) {   
            miLista.push(separacion[i])
            console.log(str)   
        } 
        console.log(miLista)    
    } 
mensaje(str)
            
            