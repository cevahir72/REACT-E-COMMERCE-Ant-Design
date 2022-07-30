import React from 'react'
import { Carousel } from 'antd';
import slider from "../helpers/slider.json"



const Slider = () => {
  return (
    <div>
      <Carousel autoplay>
      {
        slider.map(item=> {
          return (
            <div id={item.id} style={{position:"relative", height:"30vh", width:"100%"}}>
            <img src={item.image} height="600px"  width="100%" style={{opacity:"0.7",objectFit:"cover"}}/>
            <div style={{width:"100%"}}></div>
            <h2 style={{textAlign:"center",height:"70px", backgroundColor:"#c7d2e2",margin:"0"}}>{item.title}</h2>
          </div>
          )
        })
      }
      </Carousel>
      
    </div>
  )
}

export default Slider