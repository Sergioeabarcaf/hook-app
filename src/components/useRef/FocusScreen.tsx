import React, { useRef } from 'react';
import '../useEffect/SimpleForm.css';

export const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>( null );

  const handleClick = () => {
    inputRef.current?.focus();
  }

  console.log(inputRef);

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input
        ref={ inputRef }
        type="text"
        className='form-control'
        placeholder='su nombre'
      />

      <button 
        className='btn btn-outline-primary mt-5'
        onClick={ handleClick }
      >
        Focus
      </button>
    </div>
  )
}
