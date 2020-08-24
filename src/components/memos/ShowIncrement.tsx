import React, { memo } from 'react';

interface ShowIncrementProps {
  increment: Function
}

export const ShowIncrement = memo(
  ({ increment }: ShowIncrementProps) => {
    console.log('me estoy incrementando...');
    return (
      <button
        className='btn btn-primary'
        onClick={ () => {
          increment( 2 );
        }}
      >
        incrementar
      </button>
    )
  });
