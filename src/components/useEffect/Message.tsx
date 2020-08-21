import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface MessageProps {
  name: string
}

export const Message = ( { name }: MessageProps ) => {

  const [coors, setCoors] = useState({ x:0, y:0 });
  const { x, y } = coors;

  useEffect(() => {

    const mouseMove = (e: MouseEvent) => {
      const coors = {x: e.x, y: e.y}
      setCoors( coors );
    }

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])

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
      <p> X: { x }, Y: { y }</p>
    </>
  )
}
