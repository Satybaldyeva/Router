import React from 'react'
import styled from 'styled-components'
import { Button } from '../UI/Button'

export const DUMMY_PRODUCTS = [
    {
        title: 'IPhone 14 Pro ',
        price: 1320,
        id: 'e1ndaskxe',
        image: 'https://softech.kg/image/cache/296b69d253ff893ad55b7fabf3e031ed.jpg',
    },
    {
        title: 'IPhone 13 pro',
        price: 1120,
        id: 'e242kjkx',
        image: 'https://www.jio.com/medias/491997736-i-1-Digital-300Wx300H?context=bWFzdGVyfHJvb3R8NDAzMjZ8aW1hZ2UvcG5nfGgwOC9oYWEvODg3NzkzNTIzMTAwNi5wbmd8Mjc3MjBhYTY4Mjc4ZDNhYTdkZjk5N2VkYzJhODI0NGUxMDJkOWY4YzczYjE1N2IyMDdlYThjYjFhN2I2ZWQwNw',
    },
  
    {
        title: 'IPhone 12 pro',
        price: 650,
        id: 'e4zodm1vp',
        image: 'https://mm.kh.ua/image/cache/catalog/iphone/39730-1000x1000-product_popup.jpg',
    },
  ]

export const Products = () => {
  return (

    <>
      <Container>
        {DUMMY_PRODUCTS.map((phone)=>{
            return <Content key={phone.id}>
                <img src={phone.image} alt={phone.title} />
                <h2>{phone.title}</h2>
                <b>$ {phone.price}</b>
            </Content>
        })}
       
      </Container>
      <Block>
        <Button>Go Back</Button>
      </Block>
    </>
    
  )
}


const Container = styled('div')`
    background-color: #83ccde;
    display: flex;
    justify-content:space-around ;
    width: 100%;
    height: 470px;

`

const Content = styled('div')`
    width: 260px;
    height: 370px;
    border-radius: 8px;
    background-color: white;
    padding: 10px;
    margin-top: 40px;
    & > img{
        width: 240px;
        height: 280px;
    }

 

`
const Block = styled('div')`
    background-color:#83ccde ;
    width: 100%;
    height: 200px;
    padding-left: 30px;
    
     

`
