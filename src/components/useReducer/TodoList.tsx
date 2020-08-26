import React from 'react';
import { TodoListProps } from './models';
import './styles.css';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleToggle, handleDelete }: TodoListProps) => {
  return (
    <>
      <ul className='list-group list-group-flush'>
        {
          todos.map((todo, i) => (
            < TodoListItem 
              todo={ todo } 
              index={ i } 
              handleDelete={ handleDelete } 
              handleToggle={ handleToggle }
            />
          ))
        }
      </ul>
    </>
  )
}
