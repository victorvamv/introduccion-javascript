const usuarioAuntenticado = new Promise((resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve("Usuario Autenticado");
    }else {
        reject("No se pudo iniciar sesión")
    }
});


usuarioAuntenticado
.then( resultado => console.log(resultado))
.catch( error => console.log(error)) 
    