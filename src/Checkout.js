import React from 'react'
import './Checkout.css'
import {useStateValue} from './StateProvider'

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className = "checkout">
            <div className= "checkout_left">
            <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
            </div>
            {/* <h3>Hello, {user?.email }</h3> */}
            <h2 className = "checkout_title">Your shooping Basket</h2>
        </div>
    )
}

export default Checkout;
