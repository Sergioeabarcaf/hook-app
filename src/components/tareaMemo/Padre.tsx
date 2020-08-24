import React, { useState, useCallback } from 'react'
import { Hijo } from './Hijo'
import '../useEffect/SimpleForm.css';

export const Padre = () => {

  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  // const incrementar = (num: number) => {
  //   setValor(valor + num)
  // };

  const incrementar = useCallback(( factor: number ) => {
      setValor( v => v + factor)
    },[ setValor ])



  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>
      <hr />

      {
        numeros.map(n => (
          <Hijo
            key={n}
            numero={n}
            incrementar={incrementar}
          />
        ))
      }
      {/* <Hijo /> */}
    </div>
  )
}
