import React from 'react';
import { Link } from 'react-router-dom';
import './ListingCard.css'

const ListingCard = ({ addSelectedListing, areaId, listing_id, name, cost_per_night }) => {
    const selectListing = () => {
        addSelectedListing(listing_id)
    }

    return (
        <div className='listing-card'>
            <img className='listing-img' alt='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_a.jpg`} />
            <section className='listing-info'>
                <h2>{name}</h2>
                <p className='listing-cost'>${cost_per_night} / Night</p>
                <Link to={`/nav/areas/${areaId}/listings/${listing_id}`}><button  className='details-btn' onClick={selectListing}>Details</button></Link>
            </section>
        </div>
    )
}

export default ListingCard;