import React from 'react'
import "./CartItem.css"
import {useStateValue} from "../../context/index"

function CartItem() {
    const [state, action] = useStateValue()
    const {cart} = state
    console.log(cart);
    const decPro = (id)=>{
        let index = state.cart.findIndex(item => item.id === id)
        let newCart = state.cart.map((product, inx)=> {
            if(inx === index){
              return {
                ...product,
                count: product.count - 1
              }
            }else{
              return product
            }
          })
          action({type: "ADD_TO_CART", payload: newCart})
    }

    const incPro = (id)=>{
        let index = state.cart.findIndex(item => item.id === id)
        let newCart = state.cart.map((product, inx)=> {
            if(inx === index){
              return {
                ...product,
                count: product.count + 1
              }
            }else{
              return product
            }
          })
          action({type: "ADD_TO_CART", payload: newCart})
    }
  return (
    <div className='cart'>
        <h2>your shopping cart</h2>
        <h3>Total price: $ {cart.reduce((a,b)=> a + b.count * b.price, 0)}</h3>
        <div className="cart_container">
            {
                cart?.map((pro, inx)=> <div key={inx} className="cart_item">
                    <img  src={pro.img} alt="" />
                    <p>{pro.title.slice(0, 50)}...</p>
                    <h3>${pro.price}</h3>
                    <button disabled={pro.count <= 1} onClick={()=> decPro(pro.id)}>-</button>
                    <span>{pro.count}</span>
                    <button onClick={()=> incPro(pro.id)}>+</button>
                </div>)
            }
        </div>
    </div>
  )
}

export default CartItem