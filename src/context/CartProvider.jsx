import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useDrinks } from '../hooks/useDrinks'

const cartContext = createContext(null)

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const {drinks} = useDrinks()

    const addCart = (idDrink) => {
      let drinkItemCart = drinks.find(drink => drink.idDrink === idDrink)
      drinkItemCart = {
        ...drinkItemCart,
        price: idDrink / 10
      }
      setCart([...cart, drinkItemCart])
    }

    const contextValue ={
        cart,
        addCart
    }

  return (
    <cartContext.Provider value={contextValue}>
        {children}
    </cartContext.Provider>
  )
}


export {
    CartProvider,
    cartContext
}