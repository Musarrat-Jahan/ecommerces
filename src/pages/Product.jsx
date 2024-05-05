import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Component/RelatedProducts/RelatedProducts';

const Product = () => {
 const {all_product}= useContext(ShopContext);
 const {productId} = useParams();
 const Product = all_product.find((e)=> e.id === Number(productId));
 console.log("im in product", Product)
  return (
    <div>
      <Breadcrum Product={Product} />
      <ProductDisplay Product={Product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
