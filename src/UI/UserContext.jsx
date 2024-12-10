import React, { createContext,useState } from 'react'
export const carContext=createContext(null)
const UserContext = (props) => {
       
       const [name,setName]=useState("chris")
       const [searchInput,setSearchInput]=useState("tesla")
       const setSearchInputCar=()=>{
        setSearchInput(searchInput)
        console.log("func called")
       }
       const contextValues={
        searchInput,setSearchInputCar
       }
     
  return (
    <carContext.Provider value={contextValues}>
    {props.children}
    </carContext.Provider >
  )
}

export default UserContext
