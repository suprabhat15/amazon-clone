import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>${value}</strong>
                </p>
                <small>
                    <input type="checkbox"/>
                    This order contains a gift.
                </small>
                </>
            )}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal