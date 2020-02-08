import React from 'react'

const ListingDetails = ({listingId, listings}) => {
    const selectedListing = listings.find(listing => listingId === listing.listing_id)
    const listingFeatures = selectedListing.details.features.map(feature => <li>{feature}</li>)
    return (
        <div>
            <div>
                <h2>{selectedListing.name}</h2>
                <p>Address: {selectedListing.address.street}, {selectedListing.address.zip}</p>
                <p>{selectedListing.details.beds} bed {selectedListing.details.baths} bath</p>
                <p>{selectedListing.details.cost_per_night} / Night</p>
            </div>
            <ul>    
                {listingFeatures}
            </ul>
        </div>
    )
}

export default ListingDetails;