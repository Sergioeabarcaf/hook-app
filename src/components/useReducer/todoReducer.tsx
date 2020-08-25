
interface Payload {
  id: number
  desc: string
  done: boolean
}

interface Action {
  type: string
  payload: Payload
}

export const todoReducer = ( state: Payload[], action: Action ) => {
  
  switch ( action.type ) {
    case 'add':
      return [...state, action.payload];
  
    default:
      return state;
  }

}
