
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Products } from './pages/Products';
import { MyCart } from './pages/MyCart';
import { MyOrders } from './pages/MyOrders';

function App() {
  return (
   
      <>
         <header>
          <b>iStore</b>
          <nav>
          <Link to={'/'}></Link>
          <Link to={'/products'}>Products</Link>
          <Link to={'/my-cart'}>My Cart</Link>
          <Link to={'/my-orders'}>My Orders</Link>
          </nav>
       </header>

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
