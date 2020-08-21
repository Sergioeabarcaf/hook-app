import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

interface MessageProps {
  name: string
}

export const Message = ( { name }: MessageProps ) => {

  useEffect(() => {
    // se ejecuta al montar el componente
    console.log('componente Message montado');
    // Fase de limpieza, se ejecuta al desmontar el componente
    return () => {
      console.log('componente Message DESmontado');
    }
  }, [])


  return (
    <>
      <h3>{ name } Eres buenisimo!!</h3>
    </>
  )
}
