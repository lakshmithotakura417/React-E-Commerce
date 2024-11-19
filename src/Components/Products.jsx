import React from 'react'
import items from '../Components/Data';
import {Link, Navigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Products = ({items,cart,setCart}) => {
   const AddToCart=(id,title,description,imgSrc,price)=>{
    let obj={
      id,imgSrc,title,description,price
    }
    setCart([...cart,obj])
    toast.success('your item is added to cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
   }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>

       <div className='product-container'>
      {items.map((product)=>{
        return(
            <div className='each-product-box'>
              <Link to={`/products/${product.id}`}><img src={product.imgSrc} /></Link>
                <div>{product.title}</div>
                <div>{product.description}</div>
                <button className='btn btn-primary'>{product.price} ₹</button>
                <button className='btn btn-warning' onClick={()=>AddToCart(product.id,product.title,product.description,product.imgSrc,product.price)}>Add To Cart</button>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default Products
