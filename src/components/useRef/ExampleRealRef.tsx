import React, { useState } from 'react';
import '../useEffect/SimpleForm.css';
import { MultipleCustomHook } from '../examples/MultipleCustomHook';

export const ExampleRealRef = () => {

  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Real Example useRef</h1>
      <hr/>

      { show && < MultipleCustomHook /> }
      
      <button 
        className='btn btn-info mt-5'
        onClick={ () => { setShow(!show) } }
      >
        Show / Hide
      </button>
    </div>
  )
}
