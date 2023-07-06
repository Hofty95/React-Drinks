import React from 'react'
import {Formik, Field, ErrorMessage} from 'formik'
import {Form, Row, Col, Alert, Button} from 'react-bootstrap'
import  * as Yup from 'yup'
import { useCategories } from '../../hooks/useCategories'
import { useDrinks } from '../../hooks/useDrinks'

export const SearchForm = () => {

  const {categories} = useCategories()

  const {getDrink, loading} = useDrinks()

  const initialValues ={
    name:'',
    category:''
  }

  const validationSchema = Yup.object({
    name : Yup.string().required('El nombre es obligatorio'),
    category: Yup.string().required('La categoria es obligatoria')
  })

  const handleSubmit = (values) => {
    console.log(values)
    getDrink(values)
  }

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    >
      {
        (formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor='name'>Nombre de la Bebida</Form.Label>
                  <Field
                  id='name'
                  type='text'
                  placeholder='Ej. Tequila, Vodka, Cocktail'
                  name='name'
                  as={Form.Control}
                  >
                  </Field>
                  <ErrorMessage
                  name='name'
                  component={Form.Text}
                  className='text-danger'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor='category'>Categoria de la Bebida</Form.Label>
                  <Field
                  id='category'
                  name='category'
                  as={Form.Select}
                  >
                    <option value="">- Seleccione la Categoria</option>
                    {
                      categories.map(category =>(
                        <option
                        value={category.strCategory}
                        key={category.strCategory}
                        >{category.strCategory}</option>
                      ))
                    }
                  </Field>
                  <ErrorMessage
                  name='category'
                  component={Form.Text}
                  className='text-danger'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
              <Button
              variant='danger'
              disabled={loading}
              className='w-100'
              type='submit'
              >
                {loading ? 'Buscando' : 'Buscar Bebida'}
              </Button>
              </Col>
            </Row>
          </Form>
        )
      }
    </Formik>
  )
}
