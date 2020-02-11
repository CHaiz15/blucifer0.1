import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css'
import ListingCard from '../ListingCard/ListingCard.js'

const Favorites = ({ addSelectedListing, selectedAreaId, listings, favoriteListings }) => {
    const filteredListings = listings.filter(listing => favoriteListings.includes(listing.listing_id))
    const appendedListings = filteredListings.map((listing, i) =>         
        <ListingCard key={i} addSelectedListing={addSelectedListing} {...listing} {...listing.details} areaId={selectedAreaId}/>
    )
    return (
        <section className='listings-pg'>
            <div className='listings-header'>
                <h2 className='area-title'>Favorites</h2>
            </div>
            <h2 className='listing-count'>{filteredListings.length} favorites</h2>
            <section className='listings-container'>
                {favoriteListings.length === 0 ? <p className='no-favorites'>There are no favorited listings.</p>:appendedListings}
            </section>
        </section>
    )
}

export default Favorites;   

Favorites.propTypes = {
    addSelectedListing: PropTypes.func, 
    selectedAreaId: PropTypes.number, 
    listings: PropTypes.array, 
    favoriteListings: PropTypes.array
}
