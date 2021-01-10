import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
// import {toast } from 'react-toastify';


function Product({id,title,image,price,rating}) {
   const [{basket},dispatch] = useStateValue();
    const addToBasket = () =>{
        dispatch({
          type:'ADD_TO_BASKET',
          item:{
              id,
              title,
              price,
              image,
              rating
          }
        })

        // toast('🦄 Wow so easy!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     });
    //    toast.success(`Item added to cart!`);
    }
    return (
        <div className='product'>
        <div className="product__info">
            <strong>{title}</strong>
            <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
        <div className="product__rating">
            {Array(rating)
            .fill()
            .map((_)=>(
                <StarIcon/>
            ))}
        </div>
        </div>
        <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
