import React from 'react';
import './ListingsContainer.css'
import ListingCard from '../ListingCard/ListingCard.js'

const ListingsContainer = ({ addSelectedListing, selectedAreaId, listings }) => {
    const filteredListings = listings.filter(listing => listing.area_id === selectedAreaId)
    const appendedListings = filteredListings.map((listing, i) =>         
        <ListingCard key={i} addSelectedListing={addSelectedListing} {...listing} {...listing.details} areaId={selectedAreaId}/>
    )
    return(
        <section>
            <h2>{filteredListings.length} places to stay</h2>
            {appendedListings}
        </section>
    )
}

export default ListingsContainer;
