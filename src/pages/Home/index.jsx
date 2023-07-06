import React from 'react'
import { SearchForm } from '../../components/SearchForm'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'
import { DrinkList } from '../../components/DrinkList'

export const Home = () => {


  return (
    <>
    <SearchForm/>
    <DrinkList/>
    </>
  )
}
