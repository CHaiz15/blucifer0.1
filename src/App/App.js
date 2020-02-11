import React, { Component } from 'react';
import './App.css';
import { getData, fetchAreaDetails, fetchListings } from '../apiCalls/apiCalls';
import LoginForm from '../LoginForm/LoginForm.js';
import Header from '../Header/Header.js';
import AreasContainer from '../AreasContainer/AreasContainer.js';
import ListingsContainer from '../ListingsContainer/ListingsContainer.js';
import ListingDetails from '../ListingDetails/ListingDetails.js';
import Favorites from '../Favorites/Favorites.js';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: [],
      listings: [],
      selectedAreaId: '',
      selectedListingId: '',
      user: {
        name: '',
        purpose: ''
      },
      favoriteListings: []
    }
  }

  addFormInfo = (info) => {
    this.setState({user: info})
  }
  
  addSelectedArea = (id) => {
    this.setState({selectedAreaId: id})
  } 

  addSelectedListing = (id) => {
    this.setState({selectedListingId: id})
  }

  addFavoritedListing = (id) => {
    !this.state.favoriteListings.includes(id) && this.setState({favoriteListings: [...this.state.favoriteListings, id]})
  } 

  removeFavoritedListing = (id) => {
    const filteredListings = this.state.favoriteListings.filter(listing => {
      return listing !== id
    })
    this.setState({favoriteListings: filteredListings})
  }

  componentDidMount() {
    getData()
      .then(areaData => fetchAreaDetails(areaData))
      .then(areas => {
        this.setState({areas: areas})
        const arrOfSeperateListings = areas.map(area => area.listings)
        return arrOfSeperateListings.reduce((acc, listingArray) => acc.concat(listingArray), [])
      })
      .then(listings => fetchListings(listings))
      .then(listings => this.setState({listings: listings}))
  }

  render() {
    return (
      <main>
        <Route exact path='/' render={() => <LoginForm addFormInfo={this.addFormInfo}/>} />
        <Route path='/nav' render={() => 
          <Header 
            name={this.state.user.name} 
            purpose={this.state.user.purpose}
            totalFavorites={this.state.favoriteListings.length}
          />} 
        />
        <Route exact path='/nav/areas' render={() => 
          <AreasContainer 
            addSelectedArea={this.addSelectedArea} 
            areas={this.state.areas}
          />} 
        />
        <Route exact path='/nav/areas/:area_id/listings' render={() => 
          <ListingsContainer 
            addSelectedListing={this.addSelectedListing} 
            selectedAreaId={this.state.selectedAreaId} 
            listings={this.state.listings} 
            areas={this.state.areas}
           />} 
        />
        <Route path='/nav/favorites' render={() => 
          <Favorites 
            addSelectedListing={this.addSelectedListing} 
            selectedAreaId={this.state.selectedAreaId} 
            listings={this.state.listings} 
            favoriteListings={this.state.favoriteListings}
          />} 
        />
        <Route exact path='/nav/areas/:area_id/listings/:listing_id' render={() => 
          <ListingDetails 
            key={this.state.selectedListingId} 
            addFavoritedListing={this.addFavoritedListing}
            removeFavoritedListing={this.removeFavoritedListing} 
            selectedListingId={this.state.selectedListingId} 
            listings={this.state.listings} 
            favoriteListings={this.state.favoriteListings}
          />} 
        /> 
      </main>
    )
  }
}
export default App;
