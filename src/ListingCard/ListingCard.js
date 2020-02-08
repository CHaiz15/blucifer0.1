import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ addSelectedListing, areaId, listing_id, name, cost_per_night }) => {
    let selectListing = () => {
        addSelectedListing(listing_id)
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>{cost_per_night} / Night</p>
            <Link to={`/nav/areas/${areaId}/listings/${listing_id}`}><button onClick={selectListing}>Details</button></Link>
        </div>
    )
}

export default ListingCard;