import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
  }
];

export const TodoAPP = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, initialState);

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: 'Nueva tarea',
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch( action );
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
                  <p className='text-center'>{ i +1 }. { todo.desc }</p>
                  <button className='btn btn-danger'>Borrar</button>
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
              type='text'
              name='description'
              placeholder='Aprender ...'
              autoComplete='off'
              className='form-control'
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
