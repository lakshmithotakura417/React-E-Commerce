import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css'
import Products from './Products';
const ProductDetails = ({items}) => {
  const [item,setItem]=useState([]);
  const [filterdItems,setFilterdItems]=useState([])
  const {id} = useParams();
useEffect(()=>{
  let result=items.filter((product)=>product.id == id);
  let category=result[0].category;
  setItem(result)
  let filterd=items.filter((product)=>product.category == category);
  console.log(filterd)
  setFilterdItems(filterd)
},[id])
  return (
   <>
   <div className='product-detail-container' >
   {item.map((product)=>{
        return(
            <div className='single-product' >
              <div> <Link to={`/products/${product.id}`}><img src={product.imgSrc} style={{"width":"250px"}}/></Link></div>
               <div className='text'>
               <h1>{product.title}</h1>
                <div>{product.description}</div>
                <button className='btn btn-primary'>{product.price} ₹</button>
                <button className='btn btn-warning'>Add To Cart</button>
                </div>
            </div>
        )
      })}
   </div>
   <h1>Related Products</h1>
   <Products items={filterdItems}/>
   </>
  )
}

export default ProductDetails
