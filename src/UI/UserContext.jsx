import React, { createContext,useState } from 'react'
import carData from '../assets/data/carData';
export const carContext=createContext(null)
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < carData.length + 1; i++) {
    cart[i] = 0;
    
  }
  
  return cart;
};
const UserContext = (props) => {
       
       const [name,setName]=useState("chris")
       const [searchInput,setSearchInput]=useState("")
       const [cartItems, setCartItems] = useState(getDefaultCart());
      
       const setSearchInputCar=(searchInput)=>{
        setSearchInput(searchInput)
        console.log("input:"+searchInput)
      
       }
       const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        
      };
    
      const removeFromCart = (itemId) => {
        if(cartItems[itemId]!==0)
          setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };

      const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
        console.log("cartArray:"+JSON.stringify(cartItems));
      }; 

       const contextValues={
        searchInput,setSearchInputCar,cartItems,addToCart,removeFromCart,updateCartItemCount
        
       }
     
  return (
    <carContext.Provider value={contextValues}>
    {props.children}
    </carContext.Provider >
  )
}

export default UserContext
