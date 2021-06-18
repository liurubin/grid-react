import {useState,useCallback} from 'react'

const useMergeState = (initialState) => {

  const [value,setValue] = useState(initialState)

  return {
    setState: useCallback((v) =>{
      let newValue = { ...value, ...v}
      return setValue(newValue)
    },[]),
    state: value
  }
}

export default useMergeState