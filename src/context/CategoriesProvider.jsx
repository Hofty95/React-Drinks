import React, { createContext, useEffect, useState } from 'react'
import { getCategoriesServices } from '../services/categories.services'

const categoriesContext = createContext(null)

const CategoriesProvider = ({children}) => {

    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        try {
            const categoriesData = await getCategoriesServices()

            setCategories(categoriesData)

        } catch (error) {
            console.error
        }
    }

    useEffect(() => {
        getCategories()
    }, [])
    

    const contextValue = {
        categories
    }

    return (
        <categoriesContext.Provider value={contextValue}>
            {children}
        </categoriesContext.Provider>
    )
}

export {
    CategoriesProvider,
    categoriesContext
}