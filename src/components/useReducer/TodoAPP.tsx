import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';

const init = () => {
  const todosLocalStorage = localStorage.getItem('todos');
  return todosLocalStorage !== null ? JSON.parse(todosLocalStorage) : [];
}

export const TodoAPP = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [ ], init);
  const [ { description }, handleInputChange, resetFormValues ] = useForm({description: ''});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [ todos ]);

  const handleDelete = ( id: number ) => {
    const action = {
      type: 'delete',
      payload: { id }
    }
    
    dispatch( action );

  }

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    if( description.trim().length < 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch( action );
    resetFormValues();
  }
  
  return (
    <div>
      <h1>Todo APP ({ todos.length })</h1>
      <hr/>
      <div className='row'>

        <div className='col-7'>
          <ul className='list-group list-group-flush'>
            {
              todos.map( ( todo, i ) => (
                <li key={ todo.id } className='list-group-item'>
                  <p className='text-center'>{ i + 1 }. { todo.desc }</p>
                  <button 
                    className='btn btn-danger'
                    onClick={ e => handleDelete( todo.id ) }
                  >
                    Borrar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='col'>
          <h4>Agregar TODO</h4>
          <hr/>
          <form onSubmit={ handleSubmit }>
            <input 
              autoComplete='off'
              className='form-control'
              name='description'
              placeholder='Aprender ...'
              type='text'
              value={ description }
              onChange={ (e) => handleInputChange(e) }
            />

            <button
              className='btn btn-block btn-outline-primary mt-1'
              type='submit'            
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
