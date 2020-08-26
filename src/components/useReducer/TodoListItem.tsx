import React from 'react';
import { TodoListItemProps } from './models';
import './styles.css';


export const TodoListItem = ({ todo, index, handleDelete, handleToggle }: TodoListItemProps) => {
  return (
    <li key={todo.id} className='list-group-item'>
      <p
        className={`${todo.done && 'complete'}`}
        onClick={e => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className='btn btn-danger'
        onClick={e => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  )
}
