// Objeto para almacenar los contadores de cada rango de 10 números
const contador = {
    "501-510": 0,
    "511-520": 0,
    "521-530": 0,
    "531-540": 0,
    "541-550": 0,
    "551-560": 0,
    "561-570": 0,
    "571-580": 0,
    "581-590": 0,
    "591-600": 0
  };
  
  // Generar 100 números aleatorios y contar cuántas veces aparece cada rango
  for (let i = 0; i < 100; i++) {
    const numeroAleatorio = Math.floor(Math.random() * (100) + 501);
    
    for (let j = 501; j <= 591; j += 10) {
      const rangoActual = `${j}-${j + 9}`;
      
      if (numeroAleatorio >= j && numeroAleatorio <= j + 9) {
        contador[rangoActual]++;  
      }
    }
  }
  // Mostrar los resultados por consola
  console.log("Resultados de la generación de números aleatorios:");
  console.log(contador);


