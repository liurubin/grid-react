import React,{useEffect} from 'react'

export default function useTimeout(fn,delay=0){
  useEffect(()=>{
    const timer = setTimeout(fn,delay)
    return () => clearTimeout(timer)
  })
}