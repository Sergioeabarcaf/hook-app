import { useState, useEffect } from "react"

export const useFetch = ( url: string ) => {

  const initialState = {  data: [], loading: true, error: null }

  const [fetchResponse, setFetchResponse] = useState(initialState);

  useEffect(() => {
    setFetchResponse( initialState );

    fetch( url )
      .then( response => response.json())
      .then( data => {
        setFetchResponse({ data, loading: false, error: null });
      })

  }, [url])

  return fetchResponse;

}
