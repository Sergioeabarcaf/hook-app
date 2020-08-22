import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layoutEffect.css';

export const LayoutEffect = () => {

  const { counter, increment } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

  const { data } = useFetch( url );
  const [ dataAuthor ] = data; 
  const { quote } = dataAuthor ? dataAuthor : { quote: null };

  const pTag = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    console.log(pTag.current?.getBoundingClientRect());
  }, [ quote ])
 

  return (
    <>
      <h1>LayoutEffect</h1>
      <hr/>

      <blockquote className="blockquote text-right">
        <p 
          className="mb-0"
          ref={ pTag }
          >
            { quote }.
        </p>
      </blockquote>

      <button 
        className='btn btn-primary'
        onClick={ (e) => increment() }
      >
        Siguiente quote
      </button>
    </>
  )
}
