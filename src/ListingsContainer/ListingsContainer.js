import React from 'react';
import './ListingsContainer.css'
import ListingCard from '../ListingCard/ListingCard.js'

const ListingsContainer = ({ addSelectedListing, selectedAreaId, listings, areas }) => {
    const filteredListings = listings.filter(listing => listing.area_id === selectedAreaId)
    const appendedListings = filteredListings.map((listing, i) =>         
        <ListingCard key={i} addSelectedListing={addSelectedListing} {...listing} {...listing.details} areaId={selectedAreaId}/>
    )
    const selectedArea = areas.find(area => area.id === parseInt(selectedAreaId))  

    return(
        <section className='listings-pg'>
            <div className='listings-header'>
                <h2 className='area-title'>{selectedArea.name}</h2>
            </div>
            <h2 className='listing-count'>{filteredListings.length} places to stay</h2>
            <section className='listings-container'>
                {appendedListings}
            </section>
        </section>
    )
}

export default ListingsContainer;   
