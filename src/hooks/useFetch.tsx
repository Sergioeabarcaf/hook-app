import { useState, useEffect, useRef } from "react"

export const useFetch = ( url: string ) => {

  const initialState = {  data: [], loading: true, error: null }
  
  const isMounted = useRef(true);
  const [fetchResponse, setFetchResponse] = useState(initialState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    setFetchResponse( initialState );

    fetch( url )
      .then( response => response.json())
      .then( data => {
        setTimeout(() =>{
          if( isMounted.current ){
            setFetchResponse({ data, loading: false, error: null });
          }
        }, 4000);
      })

  }, [url])

  return fetchResponse;

}
