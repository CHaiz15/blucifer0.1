import React from 'react';
import PropTypes from 'prop-types';
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
                <div>
                    <p className='listing-cost-per-night'>${cost_per_night} / Night</p>
                    <Link to={`/nav/areas/${areaId}/listings/${listing_id}`}><button  className='details-btn' onClick={selectListing}>Details</button></Link>
                </div>
            </section>
        </div>
    )
}

export default ListingCard;

ListingCard.propTypes = {
    addSelectedListing: PropTypes.array, 
    areaId: PropTypes.number, 
    listing_id: PropTypes.number, 
    name: PropTypes.string, 
    cost_per_night: PropTypes.number
}