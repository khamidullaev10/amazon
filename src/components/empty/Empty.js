import React from 'react'
import "./Empty.css"

function Empty() {
  return (
    <div className='empty'>
        <div className="emptyLeft">
            <div className="emptyContent">
                <img className='emptyImg' src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="" />
                <div className="emptyContainer">
                    <h2>Your Amazon Cart is empty</h2>
                    <p className="emptyDesc">Shop today's deals</p>
                    <button className="emptyBtns">Sign in to your account</button>
                    <button className="emptyBtn">Sign up now</button>
                </div>
            </div>
            <div className="emptySquare"></div>
            <p className="emptyText">The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping CartLearn more Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
        </div>
        <div className="emptyRight">
            <h3>Customers Who Bought Items in Your Recent History Also Bought</h3>
            <img className='ddd' src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="" />
        </div>
    </div>
  )
}

export default Empty