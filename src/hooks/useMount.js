import {useEffect} from 'react'

const useMount = (onMount) => {
  useEffect(() =>{
    onMount && onMount()
  },[])
}

export default useMount