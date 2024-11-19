import React from 'react'

const Cart = ({cart,setCart}) => {
    const deleteItem=(id)=>{
        let result=cart.filter((item)=>item.id !== id);
        setCart(result)
    }
  return (
    <div style={{
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center"
      }}>
        {cart.map((product)=>{
            return(
                <div className="card mb-3" style={{"max-width": "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={product.imgSrc} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}.</p>
                    <button className='btn btn-primary'style={{"margin-right":"10px"}}>{product.price}</button>
                    <button className='btn btn-danger' onClick={()=>deleteItem(product.id)}>Delete Item</button>
                </div>
                </div>
            </div>
    </div>
            )
        })}
    </div>
  )
}

export default Cart
