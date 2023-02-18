import React from 'react'
import "./Home.css"
import { HOMEDATA } from "../../static/static"

function Home() {
  return (
    <div className='home'>
      <div className="homeImg_box">
        <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="" />
      </div>
      <div className="home_child">
        {
          HOMEDATA?.map((data, index)=> <div key={index} className="hc_item">
          <h2>{data.title}</h2>
          <img src={data.url} alt="" />
          <p>{data.link}</p>
          </div>)
        }
      </div>
    </div>
  )
}

export default Home