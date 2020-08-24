import React, { memo } from 'react';
import '../useEffect/SimpleForm.css';

interface HijoProps {
  numero: number
  incrementar: Function
}

export const Hijo = memo(({ numero, incrementar }: HijoProps) => {

  console.log('  Me volví a generar :(  ');

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  )
});
