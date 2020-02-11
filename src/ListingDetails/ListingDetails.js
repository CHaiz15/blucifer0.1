import React, { Component } from 'react'
import './ListingDetails.css';

class ListingDetails extends Component {
    constructor(){
        super();
        this.state = {
            favorited: false
        }
    }

    checkFavorited = () => {
        this.setState({favorited: !this.state.favorited})
        this.state.favorited
        ?this.props.removeFavoritedListing(this.props.selectedListingId)
        :this.props.addFavoritedListing(this.props.selectedListingId)
    }

    componentDidMount() {
        if(this.props.favoriteListings.includes(this.props.selectedListingId)) {
            this.setState({favorited: true})
        }
    }

    render() {
        const selectedListing = this.props.listings.find(listing => this.props.selectedListingId === listing.listing_id);
        const listingFeatures = selectedListing.details.features.map(feature => <li>{feature}</li>);
        return (
            <div className='listing-container'>
                <div>
                    <h2 className='listing-title'>{selectedListing.name}</h2>
                    <p className='listing-name'> {selectedListing.address.street}, {selectedListing.address.zip}</p>
                    <div className='images-container'>
                        <img className='listing-image1' alt='listing-image1' src={process.env.PUBLIC_URL + `/images/${this.props.selectedListingId}_a.jpg`} />
                        <img className='listing-image2' alt='listing-image2' src={process.env.PUBLIC_URL + `/images/${this.props.selectedListingId}_b.jpg`} />
                        <img className='listing-image3' alt='listing-image3' src={process.env.PUBLIC_URL + `/images/${this.props.selectedListingId}_c.jpg`} />
                    </div>
                    <div className='listing-details'>
                    </div>
                </div>
                    <h4 className='listing-title'>FEATURES</h4>
                <div className='listing-features'>
                        <p>{selectedListing.details.beds} Bed {selectedListing.details.baths} Bath</p>
                        <p>${selectedListing.details.cost_per_night} / Night</p>
                    <ul className='features-list'>    
                        {listingFeatures}
                    </ul>
                    <label className="switch">
                        <input readOnly checked={this.state.favorited} type="checkbox" onClick={this.checkFavorited} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        )
    }
}

export default ListingDetails;