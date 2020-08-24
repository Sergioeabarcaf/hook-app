

export const procesoPesado = ( iteraciones: number ) => {
  for( let i = 0; i < iteraciones; i++){
    console.log('estamos trabajando...');
  }

  return `${iteraciones} iteraciones realizadas.`
}
