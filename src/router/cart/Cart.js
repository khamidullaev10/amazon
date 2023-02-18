import React from 'react'
import Empty from '../../components/empty/Empty'
import {useStateValue} from "../../context/index"
import CartItem from '../../components/cart-item/CartItem'

function Cart() {
  const [state, action] = useStateValue()
  const {cart} = state
  return (
    <div>
      {cart.length === 0 ? <Empty/> : <CartItem/> }
    </div>
  )
}

export default Cart