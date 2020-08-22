import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css';

export const CounterWIthCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter( 100 );

  return (
    <>
      <h1> Counter With Hook: { counter } </h1>
      <hr/>
      <button className='btn' onClick={ () => increment() }>+1</button>
      <button className='btn' onClick={ () => decrement() }>-1</button>
      <button className='btn' onClick={ () => reset() }>Reset</button>
    </>
  )
}
