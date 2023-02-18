import React from 'react'
import "./Product.css"
import {PRODUCTS} from "../../static/static"
import {useStateValue} from "../../context/index"
import { Link } from "react-router-dom"


function Products() {
  const [state, action] = useStateValue()
  console.log(state);
  
  const addToCart = (pro)=>{
    let index = state.cart.findIndex(item => item.id === pro.id)

    if(index < 0){
      let newPro = {
        ...pro,
        count: 1
      }
      action({type:"ADD_TO_CART", payload:[...state.cart, newPro]})
    }else{
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
      

  }
  return (
    <div className='products'>
      <h1 className="product_title">Computers, Tablets and IT Accessories</h1>
      <p className="product_headtext">Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more</p>
      <div className="product_result">
        <p className="pr_text">1-12 of over 70,000 results for <span className='prt_span'>Computers</span></p>
      </div>
      <div className="product_data">
        {
          PRODUCTS?.map((item, inx)=> <div key={inx} className="PD_child">
          <div className="imgDiv">
            <Link to={`/products/${item.id}`}>
                <img className='pc_img' src={item.img} alt="" />
            </Link>
          </div>
          <p className='pc_text'>{item.title}</p>
          <span className="pc_item">{item.topName}</span>
          <div className="star_div">
            {
              item.starImg?.map((star, inx)=>
                <img key={inx} className='star_img' src={star} alt="" />
              )
            }
          </div>
          <b className="product_price">${item.price}</b>
          <del className="del_proprice">{item.delPrice}</del>
          <button onClick={()=> addToCart(item)} className='buyProduct'>Add to Cart</button>
        </div>)
        }
      </div>
    </div>
  )
}

export default Products