import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './SimpleForm.css';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name:'',
    email: ''
  });

  const { name, email } = formState;

  // Se dispara solo una vez.
  useEffect(() => {
    // console.log('hola');
  }, []);

  // Se dispara cada vez que cambia el formState.
  useEffect(() => {
    // console.log('formState');
  }, [ formState ]);

  // Se dispara cada vez que cambia el email.
  useEffect(() => {
    // console.log('email');
  }, [ email ]);

  
  const handleInputChange = ( {target} : React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr/>
      <div className='form-group'>
        <input 
          type="text"
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={ name }
          onChange={ handleInputChange }
        />
      </div>
      <div className='form-group'>
        <input 
          type="text"
          name='email'
          className='form-control'
          placeholder='ejemplo@ejemplo.com'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { name==='juan' && < Message name={ name }/>}
    </>
  )
}
