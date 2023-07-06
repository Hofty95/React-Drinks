import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import propTypes from 'prop-types'
import { useDrinks } from '../../hooks/useDrinks'

export const DrinkCard = ({drink}) => {
    const {getRecipe} = useDrinks()
  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img
            variant='top'
            src={drink.strDrinkThumb}
            alt={`image de ${drink.strDrink}`}
            />
            <Card.Body>
                <Card.Title>
                    {drink.strDrink}
                </Card.Title>
                <Button
                variant='warning'
                className='w-100 text-uppercase mt-2'
                onClick={() => getRecipe(drink.idDrink)}
                >
                    Ver Receta
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

DrinkCard.propTypes ={
    drink : propTypes.object.isRequired
}