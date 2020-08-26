import React from 'react';
import { TodoAddProps } from './models';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}: TodoAddProps) => {

  const [ { description }, handleInputChange, resetFormValues ] = useForm({description: ''});

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    if( description.trim().length < 1) return;

    const payload = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    handleAddTodo( payload );
    resetFormValues();
  }
  
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          autoComplete='off'
          className='form-control'
          name='description'
          placeholder='Aprender ...'
          type='text'
          value={description}
          onChange={(e) => handleInputChange(e)}
        />

        <button
          className='btn btn-block btn-outline-primary mt-1'
          type='submit'
        >
          Agregar
            </button>
      </form>

    </>
  )
}
