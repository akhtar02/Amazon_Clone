import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, rating }) {

    const removeFromBasket = () => {
        //remove item from basket
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />

            <div className="checkoutProduct_info" >
                <p className="checkoutProduct_title">{title} </p>

                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <button onClick = {removeFromBasket}> Remove from basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct;
