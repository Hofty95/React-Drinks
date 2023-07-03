import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import styles from './index.module.css'
import { Header } from '../components/header'
import { Footer } from '../components/Footer'
import PropTypes from 'prop-types'

export const MainLayout = ({children}) => {
  return (
    <div className={styles.main}>
        <Header/>
        <Container className='mt-5'>
            {children}
        </Container>
        <Footer/>
    </div>
  )
}
MainLayout.prototype = {
    children : PropTypes.node.isRequired
}