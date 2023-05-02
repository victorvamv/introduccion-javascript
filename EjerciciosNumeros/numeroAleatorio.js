function numerosAleatorios(numMin = 501) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    const contarNumeros = Math.floor(Math.random()*100 + numMin)

    return contarNumeros; // The maximum is inclusive and the minimum is inclusive
  }
let contador1 = 0  
let contador2 = 0
let contador3 = 0
let contador4 = 0
let contador5 = 0
let contador6 = 0
let contador7 = 0
let contador8 = 0
let contador9 = 0
let contador10 = 0


for(let i = 0; i < 100;i++){
    const numeros = numerosAleatorios()
    if(numeros >= 501 && numeros <= 510){
        contador1++
    }else if(numeros >= 511 && numeros <= 520 ){
        contador2++
    }else if(numeros >= 521 && numeros <= 530 ){
        contador3++
    console.log(numeros)
    }else if(numeros >= 531 && numeros <= 540 ){
        contador4++
    console.log(numeros)
    }else if(numeros >= 541 && numeros <= 550 ){
        contador5++
    console.log(numeros)
    }else if(numeros >= 551 && numeros <= 560 ){
        contador6++
    console.log(numeros)
    }else if(numeros >= 561 && numeros <= 570 ){
        contador7++
    console.log(numeros)
    }else if(numeros >= 571 && numeros <= 580 ){
        contador8++
    console.log(numeros)
    }else if(numeros >= 581 && numeros <= 590 ){
        contador9++
    console.log(numeros)
    }else if(numeros >= 591 && numeros <= 600 ){
        contador10++
    console.log(numeros)
    }

}
console.log(`Aparecieron ${contador1} veces entre el número 501 al 510`)
console.log(`Aparecieron ${contador2} veces entre el número 511 al 520`)
console.log(`Aparecieron ${contador3} veces entre el número 521 al 530`)
console.log(`Aparecieron ${contador4} veces entre el número 531 al 540`)
console.log(`Aparecieron ${contador5} veces entre el número 541 al 550`)
console.log(`Aparecieron ${contador6} veces entre el número 551 al 560`)
console.log(`Aparecieron ${contador7} veces entre el número 561 al 570`)
console.log(`Aparecieron ${contador8} veces entre el número 571 al 580`)
console.log(`Aparecieron ${contador9} veces entre el número 581 al 590`)
console.log(`Aparecieron ${contador10} veces entre el número 591 al 600`)



// Lo mas cercano de reducir el codigo
// for(let i = 0; i < 100;i++){
    
//     const numeros = numerosAleatorios()
    
    
//     for(let x = 1; x < 10; x++){
            
//         if(numeros >= limiteMinimo && numeros <= limiteMaximo){
//             limiteMaximo = limiteMaximo +10
//             limiteMinimo = limiteMinimo +10
//             contador1++
//         }

        
        
//     }
    
//     console.log(`Aparecieron ${contador1} veces entre el número ${limiteMinimo} al ${limiteMaximo}`)

