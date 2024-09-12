import { createContext, useEffect, useState } from 'react';
import { drinks_list } from '../assets/data/data';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else {
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    console.log("Updated cart items:", cartItems);
  };
  
  const removeFromCart = (itemId) => {
   setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  };  

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // Loop through cartItems
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        // If cartItems uses string keys but drinks_list uses numbers, you can convert:
        const itemInfo = drinks_list.find((product) => product.id === Number(itemId))
        // Add to total if itemInfo exists and price is valid
        if (itemInfo.price) {
          totalAmount += itemInfo.price * cartItems[itemId];
        } else {
          console.error(`Item with id ${itemId} has no valid price.`);
        }
      }
    }
  
    return totalAmount;
  };
  
  

  useEffect(() => {
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);
  
  const contextValue = {
    drinks_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;