import React, { createContext, useEffect, useState } from 'react'
import { filterDrinksService, getRecipeService } from '../services/drinks.service'

const DrinksContext = createContext(null)

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([])
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState({})


    const getDrink = async (data) => {
        try {
            const {ingredient, category} = data

            setLoading(true)
            const drinkData = await filterDrinksService(ingredient, category)

            setDrinks(drinkData)
            
        } catch (error) {
            console.error
        } finally {
            setLoading(false)
        }
    }

    const getRecipe = async (drinkId) => {
        try {

            setLoading(true)

            const recipeData = await getRecipeService(drinkId)

            setRecipe(recipeData)
            
        } catch (error) {
            console.error
        } finally {
            setLoading(false)
        }
    }

    const contextValue = {
        drinks,
        getDrink,
        loading,
        getRecipe
    }

/*     useEffect(() => {
        getDrink({
            ingredient : 'Vodka',
            category : 'Shot'
        })
    }, []) */
    

  return (
    <DrinksContext.Provider value={contextValue}>
        {children}
    </DrinksContext.Provider>
  )
}


export {
DrinksContext,
DrinksProvider
}