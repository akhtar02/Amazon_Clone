import React from 'react'
import './Checkout.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

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
        {basket?.length === 0 ? (
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>You have no items in your basket. To buy on or more items, click "Add to to Basket" next to the item.</p>
            </div>
        ) : (
            <div>
                <h2 className ="checkout_title">Your Shopping Baskeet</h2>
                {basket.map(item => (
                    <CheckoutProduct 
                    item={item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                ))}
               
            </div>
        )}
            </div>
            {/* <h3>Hello, {user?.email }</h3> */}
           
        </div>
    )
}

export default Checkout;
