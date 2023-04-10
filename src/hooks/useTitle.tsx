import { useEffect } from 'react'

export const useTitle = (title: string ) => {

    /* UPDATE DOCUMENT TITLE */
    useEffect(()=>{
        document.title = `${title}`;
    }, [title]);   
  return null;
}
