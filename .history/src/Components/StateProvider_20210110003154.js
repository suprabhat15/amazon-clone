import React,{createContext,useContext,useReducer} from 'react'
export const StateContext = createContext();

//BUILD A PROVIDER

export const StateProvider = (props,{reducer, initialState})=>{
   return ( <StateContext.Provider value={useReducer( reducer, initialState)}>
     {props.children}
    </StateContext.Provider>
   )}

//This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);