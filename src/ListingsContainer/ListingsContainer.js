import React from 'react';
import './ListingsContainer.css'
import ListingCard from '../ListingCard/ListingCard.js'

const ListingsContainer = ({ listings }) => {
  const appendedListings = listings.map(area => 
    <ListingCard />)
  return(

  )
}

export default ListingsContainer;
