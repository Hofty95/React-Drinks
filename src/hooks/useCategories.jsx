import {useContext} from 'react'
import {categoriesContext} from '../context/CategoriesProvider'

export const useCategories = () => {
  return  useContext(categoriesContext)
}
