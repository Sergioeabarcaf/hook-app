import React from 'react';

interface SmallProps {
  value: number
}

export const Small = ( ({ value }: SmallProps) => {
  console.log( value );
  return (
    <small>{ value }</small>
  )
})
