import React from 'react'
import { useDrinks } from '../../hooks/useDrinks'
import { Image, Modal, Row, Col } from 'react-bootstrap'

export const DrinkModalDetail = () => {

    const {modal, handleModalClick, recipe} = useDrinks()
    const {strDrink,strDrinkThumb,strInstructions} = recipe

    const showIngridients = () => {

        const ingridients = []
        for (let i = 0; i < 15; i++) {
            if(recipe[`strIngredient${i}`]){
                ingridients.push(
                <li>
                  {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
                </li>
            )
            }

            
        }
        return ingridients
    }

  return (
    <Modal show={modal} onHide={handleModalClick} size='xl' centered>
        <Row>
            <Col>
            <Image
            src={strDrinkThumb}
            fluid
            className='rounded-start'
            />
            </Col>
            <Col>
            <Modal.Header closeButton>
        <Modal.Title>{strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Instructions</h4>
        <p>{strInstructions}</p>
        <h4>Ingridients & Measures</h4>
        <p>{showIngridients()}</p>
      </Modal.Body>
            </Col>
        </Row>
    </Modal>
  )
}
