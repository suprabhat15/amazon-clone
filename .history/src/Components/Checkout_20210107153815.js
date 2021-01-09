import React from 'react'
import { useStateValue } from './StateProvider'

function Checkout () {
    const [{basket}] = useStateValue()    
    return (
            <div className='checkout'>
                <img src="" alt="" className="checkout__ad"/>
            </div>
        )
}

export default Checkout
