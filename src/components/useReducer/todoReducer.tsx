import { Action, Todo } from './models';

export const todoReducer = ( state: Todo[], action: Action ) => {
  
  switch ( action.type ) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter( todo => todo.id !== action.payload.id );
    case 'toggle':
      return state.map( todo => {
        return todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo;
      });
    default:
      return state;
  }
}
