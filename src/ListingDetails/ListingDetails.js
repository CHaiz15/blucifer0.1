import React from 'react'
import './ListingDetails.css';

const ListingDetails = ({addFavoritedListing, listingId, listings}) => {
    console.log(addFavoritedListing);
    
    const addToFavorites = () => {
        addFavoritedListing(listingId);
      }
    const selectedListing = listings.find(listing => listingId === listing.listing_id)
    const listingFeatures = selectedListing.details.features.map(feature => <li>{feature}</li>)
    return (
        <div className='listing-container'>
            <div>
                <h2 className='listing-name'>{selectedListing.name}</h2>
                <p className='listing-name'> {selectedListing.address.street}, {selectedListing.address.zip}</p>
                <div className='images-container'>
                    <img className='listing-image1' src={process.env.PUBLIC_URL + `/images/${listingId}_a.jpg`} />
                    <img className='listing-image2' src={process.env.PUBLIC_URL + `/images/${listingId}_b.jpg`} />
                    <img className='listing-image3' src={process.env.PUBLIC_URL + `/images/${listingId}_c.jpg`} />
                </div>
                <div className='listing-details'>
                </div>
            </div>
                <h4 className='listing-title'>FEATURES</h4>
            <div className='listing-features'>
                    <p>{selectedListing.details.beds} Bed {selectedListing.details.baths} Bath</p>
                    <p>{selectedListing.details.cost_per_night} / Night</p>
                <ul className='features-list'>    
                    {listingFeatures}
                </ul>
                <label class="switch">
                    <input type="checkbox" placeholder='fav' onClick={addToFavorites} />
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default ListingDetails;