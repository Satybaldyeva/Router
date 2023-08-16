
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import { Products } from './pages/Products';
import { MyCart } from './pages/MyCart';
import { MyOrders } from './pages/MyOrders';
import styled from 'styled-components'
import { ProductDetail } from './pages/ProductDetails';

function App() {
  return (
   
      <>
         <StyledHeader>
          <h2>iStore</h2>
          <nav>
          <NavLink style={(props)=>{
            if(props.isActive){
              return {
                color: 'black',
              }
            }
            return {color: 'white'}
          }} to={'/'}><div></div></NavLink>
          <NavLink style={(props)=>{
            if(props.isActive){
              return {
                color: 'black',
              }
            }
            return {color: 'white'}
          }}  to={'/products'}>Products</NavLink>
          <NavLink style={(props)=>{
            if(props.isActive){
              return {
                color: 'black',
              }
            }
            return {color: 'white'}
          }}  to={'/my-cart'}>My Cart</NavLink>
          <NavLink style={(props)=>{
            if(props.isActive){
              return {
                color: 'black',
              }
            }
            return {color: 'white'}
          }}  to={'/my-orders'}>My Orders</NavLink>
          </nav>
       </StyledHeader>

       <Routes>
       <Route path='/' element={<div></div>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/my-cart' element={<MyCart/>}/>
        <Route path='/my-orders' element={<MyOrders/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
       </Routes>
      </>
     
   
  );
}

export default App;


const StyledHeader = styled('header')`
  background-color: #3b7cd6;
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  align-items: center;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;

  &>nav{
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    
  }

  & > nav > a{
    text-decoration: none;
    outline: none;
    font-size: 1.2rem;
    color: white;
  }


`
