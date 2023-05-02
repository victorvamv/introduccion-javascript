const str = "oso"
function palindromo(str){
    //Segunda manera de invertir la cadena
    let fraseInvertida= ""
    for (let i = str.length-1; i > -1; i--){
        fraseInvertida += str[i]
    }
    console.log(fraseInvertida)
        if(fraseInvertida.toLowerCase() === str.toLowerCase()){
            console.log(`${str} es un palindromo`)
        }else{
            console.log(`${str} no es un palindromo`)
        }
}
palindromo(str)

