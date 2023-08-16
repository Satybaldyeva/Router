import React from 'react'
import styled from 'styled-components'
import { Button } from '../UI/Button'
import { useNavigate } from 'react-router-dom'

export const DUMMY_PRODUCTS = [
    {
        title: 'IPhone 14 Pro ',
        price: 1320,
        id: 'e1ndaskxe',
        image: 'https://softech.kg/image/cache/296b69d253ff893ad55b7fabf3e031ed.jpg',
        text: `Конструкция
        Материал рамки: нержавеющая сталь 
        Материал тыльной панели: стекло
        Материал экрана: стекло
        Размеры: 147.5 x 71.5 x 7.9 мм
        Вес: 206 г`,

    },
    {
        title: 'IPhone 13 pro',
        price: 1120,
        id: 'e242kjkx',
        image: 'https://www.jio.com/medias/491997736-i-1-Digital-300Wx300H?context=bWFzdGVyfHJvb3R8NDAzMjZ8aW1hZ2UvcG5nfGgwOC9oYWEvODg3NzkzNTIzMTAwNi5wbmd8Mjc3MjBhYTY4Mjc4ZDNhYTdkZjk5N2VkYzJhODI0NGUxMDJkOWY4YzczYjE1N2IyMDdlYThjYjFhN2I2ZWQwNw',
        text: ` Грандиозный апгрейд камер. Для потрясающих фотографий.
         В этом апгрейде значительно обновлены и аппаратная часть,
         и программное обеспечение. Теперь для сверхшироко­угольной камеры доступен режим макросъёмки, 
         для телефото­камеры — трёхкратный оптический зум, а Ночной режим поддерживается на всех трёх камерах.`,
    },
  
    {
        title: 'IPhone 12 pro',
        price: 650,
        id: 'e4zodm1vp',
        image: 'https://mm.kh.ua/image/cache/catalog/iphone/39730-1000x1000-product_popup.jpg',
        text: `iPhone Pro 12 оснащен чипом A14 Bionic, которым называют одним из самых мощных. Новый чип использует техпроцесса 5 нм. Apple отмечает,
         что и новый 6-ядерный процессор, и 4-ядерный графический процессор являются самыми быстрыми из когда-либо существовавших, а производительность 
         iPhone 12 Pro стала на 50% выше, чем у любого другого телефона.`,
    },
  ]

export const Products = () => {

    const navigate = useNavigate();

    const clickHandler = (phoneId)=>{
        navigate(`/products/${phoneId}`)
    }

  return (

    <>
      <Container>
        {DUMMY_PRODUCTS.map((phone)=>{
            return <Content key={phone.id} onClick={()=>clickHandler(phone.id)}>
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
