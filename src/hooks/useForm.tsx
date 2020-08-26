import { useState } from "react"

export const useForm = <T extends {}>( initialState: T): [T, Function, Function] => {

  const [formsValues, setFormsValues] = useState( initialState );

  const handleInputChange = ( {target} : React.ChangeEvent<HTMLInputElement> ) => {
    setFormsValues({
      ...formsValues,
      [target.name]: target.value
    });
  }

  const resetValues = () => {
    setFormsValues( initialState );
  }

  return [ formsValues, handleInputChange, resetValues ];
}
