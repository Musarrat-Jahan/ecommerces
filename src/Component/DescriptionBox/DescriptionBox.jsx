import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigater'>
         <div className='descriptionbox-nav-box'>Description</div>   
         <div className='descriptionbox-nav-box fade'>Reviews (122)</div>   
        </div>
        <div className='descriptionbox-description'>
            <p>
            Ecommerce is a method of buying and selling goods and services online.
             The definition of ecommerce business can also include tactics like affiliate marketing.
             You can use ecommerce channels such as your own website, an established selling website like Amazon,
              or social media to drive online sales.  
            </p>
            <p>
            Commerce is the large-scale organized system of activities, functions,
             procedures and institutions that directly or indirectly contribute to the smooth, 
             unhindered distribution and transfer of goods and services on a substantial scale and at the right time, 
             place, quantity, quality and price through various channels ...   
            </p>
        </div>

      
    </div>
  )
}

export default DescriptionBox
