import React from 'react';
import './ListingsContainer.css'
import ListingCard from '../ListingCard/ListingCard.js'

const ListingsContainer = ({ selectedAreaId, listings }) => {
    const filteredListings = listings.filter(listing => listing.area_id === selectedAreaId)
    console.log('selectedAreaId',selectedAreaId)
    console.log('filteredListings', filteredListings)
    const appendedListings = filteredListings.map(listing => 
        <ListingCard name={listing.name}/>
    )
    console.log(appendedListings)
    return(
        <section>
            <h1>YO</h1>
            {appendedListings}
        </section>
    )
}

export default ListingsContainer;
