
interface Payload {
  id: number
  desc?: string
  done?: boolean
}

interface Action {
  type: string
  payload: Payload
}

export const todoReducer = ( state: Payload[], action: Action ) => {
  
  switch ( action.type ) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter( todo => todo.id !== action.payload.id );
    default:
      return state;
  }
}
