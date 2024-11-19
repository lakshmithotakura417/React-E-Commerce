import React from 'react'
import '../App.css';
import items from '../Components/Data'
import { Link, NavLink } from 'react-router-dom';
const Navbar = ({setData,cart}) => {
const FilterByCategory=(category)=>{
let result=items.filter((product)=>product.category == category);
setData(result)
}
const FilterByPrice=(price)=>{
  let result=items.filter((product)=>product.price >= price)
 setData(result)
  }
  return (
    <div>
      <div className='nav-container'>
        <Link to='/' className='logo'>E-Commerce</Link>
        <div className='input-container'>
            <input type="text" placeholder='search here ...'/>
        </div>
        <NavLink to='/cart'>
        <div className='cart'>
            <button type="button" className="btn btn-primary position-relative">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
        </NavLink>
      </div>

      <div className='menu-container'>
        <div className='items'>Filter By-{'>'}</div>
        <div className='items' onClick={()=>setData(items)}>No Filter</div>
        <div className='items' onClick={()=>FilterByCategory('mobiles')}>Mobiles</div>
        <div className='items' onClick={()=>FilterByCategory('laptops')}>Laptops</div>
        <div className='items' onClick={()=>FilterByCategory('tablets')}>Tablets</div>
        <div className='items' onClick={()=>FilterByPrice(29999)}>{'>='}29999</div>
        <div className='items' onClick={()=>FilterByPrice(49999)}>{'>='}49999</div>
        <div className='items' onClick={()=>FilterByPrice(69999)}>{'>='}69999</div>
        <div className='items' onClick={()=>FilterByPrice(89999)}>{'>='}89999</div>


      </div>
    </div>
  )
}

export default Navbar
