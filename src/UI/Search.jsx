import React, { useContext } from 'react'
import { carContext } from './UserContext'
const Search = () => {
    const values=useContext(carContext)
    console.log("values:"+JSON.stringify(values))
  return (
    <div>
 
    </div>
  )
}

export default Search
