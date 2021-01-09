import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"

import { useStateValue } from './StateProvider';
function Subtotal() {
    return (
        <div className="subtotal">
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
