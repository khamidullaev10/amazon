import React from 'react'
import "./SinglePage.css"
import {PRODUCTS} from "../../static/static"
import {useParams} from "react-router-dom"
import {useStateValue} from "../../context/index"

function SinglePage() {
  const [state, action] = useStateValue()
  const {id} = useParams()
  console.log({id});
  let filterData = PRODUCTS.find(item=> item.id === Number(id))

   
return (
    <div className='single_page'>
      <div className="single_navbar">
          <p>{filterData?.title}</p>
          <p>14,490 $</p>
          <button>7% of Coupon</button>
      </div>
      <hr />
      <div className="second_page">
        <img src={filterData?.img} alt="" />
        <div className="combo">
          <p className='combo_p'>{filterData?.title}</p>
          <p className='combo_p2'>Visit The Logitech Store</p>
          <h3>Size: 1 Pack</h3>
          <h2>Brand : Logitech</h2>
          <h2>Color : Black</h2>
          <h2>Connectivity : Wireles</h2>
          <h2>Technology</h2>
          <h2>Compatible : LapTop, Personal Computer</h2>
          <button>Add to List</button>
        </div>
      </div>

    </div>
  )
}

export default SinglePage