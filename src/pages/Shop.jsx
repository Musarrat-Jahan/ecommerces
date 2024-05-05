import React from 'react';
import Hero from '../Component/Hero/Hero';
import Popular from '../Component/Popular/Popular';
import Offer from '../Component/Offers/Offer';
import NewCollection from '../Component/NewCollection/NewCollection';
import NewsLetters from '../Component/NewsLetters/NewsLetters';
// import Item from '../Component/Item/Item'


const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetters />

      {/* <Item /> */}
    </div>
  )
}

export default Shop
