import React from 'react'
import { SearchForm } from '../../components/SearchForm'
import { DrinkList } from '../../components/DrinkList'
import { DrinkModalDetail } from '../../components/DrinkModalDetail'

export const Home = () => {


  return (
    <>
    <SearchForm/>
    <DrinkList/>
    <DrinkModalDetail/>
    </>
  )
}
