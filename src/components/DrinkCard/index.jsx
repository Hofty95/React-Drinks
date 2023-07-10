import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import propTypes from 'prop-types'
import { useDrinks } from '../../hooks/useDrinks'
import styles from './index.module.css'
import useCart from '../../hooks/useCart'

export const DrinkCard = ({drink}) => {
    const {handleDrinkIdClick, handleModalClick} = useDrinks()
    const {addCart} = useCart()


  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img
            variant='top'
            src={drink.strDrinkThumb}
            alt={`image de ${drink.strDrink}`}
            />
            <Card.Body>
                <Card.Title className={styles.strDrink}>
                    {drink.strDrink}
                </Card.Title>
                <Button
                variant='warning'
                className='w-100 text-uppercase mt-2'
                onClick={() => {
                    handleDrinkIdClick(drink.idDrink)
                }}
                >
                    Ver Receta
                </Button>
                <Button
                variant='danger'
                className='w-100 text-uppercase mt-2'
                onClick={() => {addCart(drink.idDrink)}}
                >
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

DrinkCard.propTypes ={
    drink : propTypes.object.isRequired
}