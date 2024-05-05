import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {Product} = props;   
  return (
    
    <div className='breadcrum'>
     
   <h1> HOME</h1>
    <img src={arrow_icon} alt="" />
    <h1>SHOP</h1> 
    <img src={arrow_icon} alt="" /> 
    {Product.category} 
    <img src={arrow_icon} alt="" />
    {Product.name}
    </div>
  )
}

export default Breadcrum
