import React, { createContext, useEffect, useState } from 'react'
import { filterDrinksService, getRecipeService } from '../services/drinks.service'

const DrinksContext = createContext(null)

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([])
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState({})
    const [idDrink, setIdDrink] = useState(null)
    const [modal, setModal] = useState(false)


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


    useEffect(() => {

        const getRecipe = async () => {

            if(!idDrink) return

            try {
                setLoading(true)
    
                const recipeData = await getRecipeService(idDrink)
    
                setRecipe(recipeData)

                setModal((preview) => !preview)
            } catch (error) {
                console.error
            } finally {
                setLoading(false)
            }
        };
        getRecipe()
    }, [idDrink])

    const handleDrinkIdClick = (id) => {
        setIdDrink(id)
    }
    
    const handleModalClick = () => {
        setModal((preview) => !preview)
    }

    const contextValue = {
        drinks,
        getDrink,
        loading,
        handleDrinkIdClick,
        recipe,
        modal,
        handleModalClick
    }
    

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