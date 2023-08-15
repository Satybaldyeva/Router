
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Products } from './pages/Products';
import { MyCart } from './pages/MyCart';
import { MyOrders } from './pages/MyOrders';
import styled from 'styled-components'

function App() {
  return (
   
      <>
         <StyledHeader>
          <h2>iStore</h2>
          <nav>
          <Link to={'/'}><div></div></Link>
          <Link to={'/products'}>Products</Link>
          <Link to={'/my-cart'}>My Cart</Link>
          <Link to={'/my-orders'}>My Orders</Link>
          </nav>
       </StyledHeader>

       <Routes>
       <Route path='/' element={<div></div>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/my-cart' element={<MyCart/>}/>
        <Route path='/my-orders' element={<MyOrders/>}/>
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
