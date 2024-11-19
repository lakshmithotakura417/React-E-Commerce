import React ,{useState}from 'react'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import {Routes,Route} from 'react-router-dom'
import ProductDetails from './Components/ProductDetails';
import items from '../src/Components/Data'
import Cart from './Components/Cart';
const App = () => {
  const [data,setData]=useState([...items]);
  const [cart,setCart]=useState([])
  return (
    <div>
      <Navbar cart={cart}setData={setData}/>
      <Routes>
      <Route path='/' element={<Products cart={cart} setCart={setCart} items={data}/>}/>
      <Route path='/products/:id' element={<ProductDetails items={data}/>}/>
      <Route path='/cart' element={ <Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
     
    </div>
  )
}

export default App
