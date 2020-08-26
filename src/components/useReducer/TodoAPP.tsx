import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';
import { Todo } from './models';

const init = () => {
  const todosLocalStorage = localStorage.getItem('todos');
  return todosLocalStorage !== null ? JSON.parse(todosLocalStorage) : [];
}

export const TodoAPP = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [ ], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [ todos ]);

  const handleDelete = ( id: number ) => {
    dispatch({ type: 'delete', payload: { id } });
  }

  const handleToggle = ( id: number ) => {
    dispatch({ type: 'toggle', payload: { id } });
  }

  const handleAddTodo = ( payload: Todo ) => {
    dispatch( { type: 'add', payload } );
  }
  
  return (
    <div>
      <h1>Todo APP ({ todos.length })</h1>
      <hr/>
      <div className='row'>

        <div className='col-7'>
          < TodoList 
            todos={ todos } 
            handleDelete={ handleDelete } 
            handleToggle={ handleToggle } 
          />
        </div>

        <div className='col'>
          < TodoAdd handleAddTodo={ handleAddTodo } />
        </div>
      </div>
    </div>
  )
}
