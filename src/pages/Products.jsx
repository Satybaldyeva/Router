import React from 'react'

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
        image: 'https://telefon.kg/image/catalog/new/Phones/Apple/iPhone%2012%20Pro/5.png',
    },
  ]

export const Products = () => {
  return (
    <div>
        {DUMMY_PRODUCTS.map((phone)=>{
            return <div key={phone.id}>
                <img src={phone.image} alt={phone.title} />
                <b>{phone.title}</b>
                <p>$ {phone.price}</p>
            </div>
        })}
    </div>
  )
}
