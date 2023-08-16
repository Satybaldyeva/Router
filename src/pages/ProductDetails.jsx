import React from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_PRODUCTS } from './Products'
import { Button } from '../UI/Button'
import styled from 'styled-components'

export const ProductDetail = () => {
  const params = useParams()

  const productId = params.productId

  const currentProduct = DUMMY_PRODUCTS.find((product)=>
    product.id === productId
  )

  console.log(currentProduct);
  return (
    <Phone>
      <img src={currentProduct.image} alt={currentProduct.title} />
      <div>
      <Button>Go Back</Button>
      <h3>Price: ${currentProduct.price}</h3>
      <p>{currentProduct.text}</p>
      
      </div>
     
    </Phone>
  )
}

const Phone = styled('div')`
    display: flex;
    gap: 1rem;
    width: 70%;
    margin-top: 40px;
    &>img{
        width: 300px;
        height: 300px;
    }

`
