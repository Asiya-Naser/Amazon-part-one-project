import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignIn from './Pages/Auth/SignUp';
import Landing
 from './Pages/Landing/Landing';
 import Payment from './Pages/Payment/Payment';
 import Order from './Pages/Order/Order';
 import Cart from './Pages/Cart/Cart';
 import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
const Routing = () => {
  return (
     <Router>
       <Routes>
    <Route path='/'element={<Landing/>}/>
    <Route path='/auth'element={<SignIn/>}/>
    <Route path='/payments'element={<Payment/>}/>
    <Route path='/orders'element={<Order/>}/>
    <Route path='/category/:categoryName'element={<Results/>}/>
    <Route path='/cart'element={<Cart/>}/>
    <Route path='/products/:ProductId'element={<ProductDetail/>}/>

    
        </Routes> 
     </Router>
  )
}

export default Routing