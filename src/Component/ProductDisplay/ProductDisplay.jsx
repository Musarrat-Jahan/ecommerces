import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext'


const ProductDisplay = (props) => {
  const {Product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='Productdisplay'>
      <div className="productdisplay-left">    
       <div className='Productdisplay-img-list'>
        <img src={Product.image} alt="" />
        <img src={Product.image} alt="" />
        <img src={Product.image} alt="" />
        <img src={Product.image} alt="" />
        </div> 
        <div className='Productdisplay-img'>
          <img className='Productdisplay-main-img' src={Product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{Product.name}</h1>
        <div className='Productdisplay-right-star'>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
       <div className='productdisplay-right-prices'>
       <div className='productdisplay-right-prices-old'>${Product.old_price}</div>
        <div className='productdisplay-right-prices-new'>${Product.new_price}</div>
        </div> 
        <div className='productdisplay-right-discraption'>
          A lightweight, usally knitted, pullover shirt, close-fitting and wear
          a round neckline and short sleeves, worn as an undershirt or outer 
          garment.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
        <div className='productdisplay-right-sizes'>
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
        </div>
        </div>
        <button onClick={()=>{addToCart(Product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
         
       
      </div>
    </div>
  )
}

export default ProductDisplay