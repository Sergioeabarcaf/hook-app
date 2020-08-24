import React, { useState } from 'react';
import '../useEffect/SimpleForm.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

  const { counter, increment } = useCounter( 10 );
  const [show, setShow] = useState( true );

  return (
    <div>
      <h1>Counter: <Small value={ counter }/> </h1>
      <hr/>
      <button
        className='btn btn-primary'
        onClick={ e => increment() }
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary'
        onClick={ () => { setShow(!show) } }
      >
        Show/Hide {String( show )}
      </button>
    </div>
  )
}
