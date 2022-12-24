import React, { createContext, useReducer } from 'react'
import { destinationReducer, originReducer } from '../reducers/reducers'

export const  OriginalContext = createContext()

export const  DestinationContext = createContext()

const OriginalContextProvider = ({children}) => {


const [origin,dispatchOrigin] =useReducer(originReducer,{
    longitude:null,
    latitude:null,
    address:'',
    name:''

})


  return (
    <OriginalContext.Provider value={{origin,dispatchOrigin}}>{children}</OriginalContext.Provider>
  )
}

export default OriginalContextProvider



export const DestinationContextProvider = ({children}) => {


  const [destination,dispatchDestination] =useReducer(destinationReducer,{
      longitude:null,
      latitude:null,
      address:'',
      name:''
  
  })
  
  
    return (
      <DestinationContext.Provider value={{destination,dispatchDestination}}>{children}</DestinationContext.Provider>
    )
  }
  
  