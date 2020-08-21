import React, { useEffect } from 'react';
import './SimpleForm.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCursomHook = () => {

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('email cambio')
  }, [email]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log( formValues );
  }
  
  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormWithCursomHook</h1>
      <hr/>
      <div className='form-group'>
        <input 
          type="text"
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={ name }
          onChange={ (e) => handleInputChange(e) }
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
          onChange={ (e) => handleInputChange(e) }
        />
      </div>
      <div className='form-group'>
        <input 
          type="password"
          name='password'
          className='form-control'
          placeholder='*****'
          value={ password }
          onChange={ (e) => handleInputChange(e) }
        />
      </div>
      <button type='submit' className='btn btn-primary'>Guardar</button>
    </form>
  )
}
