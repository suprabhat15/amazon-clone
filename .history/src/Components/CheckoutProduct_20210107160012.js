import React from 'react'

function CheckoutProduct({id,title,image,price,rating}) {
    return (
       <div className="checkoutProduct">
           <img src={image} alt=""/>
       </div>
    )
}

export default CheckoutProduct
