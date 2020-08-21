import { useState } from "react"

export const useForm = <T extends {}>( initialState: T): [T, Function] => {

  const [formsValues, setFormsValues] = useState(initialState);

  const handleInputChange = ( {target} : React.ChangeEvent<HTMLInputElement> ) => {
    setFormsValues({
      ...formsValues,
      [target.name]: target.value
    });
  } 

  return [ formsValues, handleInputChange ];
}
