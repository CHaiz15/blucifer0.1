import React, { Component } from 'react';
import './App.css';
import { fetchAreaDetails, fetchListings } from '../helpers';
import LoginForm from '../LoginForm/LoginForm.js';
import Header from '../Header/Header.js';
import AreasContainer from '../AreasContainer/AreasContainer.js';
import ListingsContainer from '../ListingsContainer/ListingsContainer.js';
import ListingDetails from '../ListingDetails/ListingDetails.js';
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
  
  addSelectedArea = (id) => {
    this.setState({selectedAreaId: id})
  } 

  addSelectedListing = (id) => {
    this.setState({selectedListingId: id})
  }

  addFavoritedListing = (id) => {
    this.setState({favoriteListings: [...this.state.favoriteListings, id]})
  } 

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areaData => fetchAreaDetails(areaData))
      .then(areas => {
        this.setState({areas: areas})
        const arrOfSeperateListings = areas.map(area => area.listings)
        return arrOfSeperateListings.reduce((acc, listingArray) => acc.concat(listingArray), [])
      })
      .then(listings => fetchListings(listings))
      .then(listings => this.setState({listings: listings}))
  }

  addFormInfo = (info) => {
    this.setState({user: info})
  }

  render() {
    return (
      <main>
        <Route exact path='/' render={() => <LoginForm addFormInfo={this.addFormInfo}/>} />
        <Route path='/nav' render={() => <Header name={this.state.user.name} purpose={this.state.user.purpose}/>} />
        <Route exact path='/nav/areas' render={() => <AreasContainer addSelectedArea={this.addSelectedArea} areas={this.state.areas}/>} />
        <Route exact path='/nav/areas/:area_id/listings' render={() => <ListingsContainer addSelectedListing={this.addSelectedListing} selectedAreaId={this.state.selectedAreaId} listings={this.state.listings}/>} />
        <Route exact path='/nav/areas/:area_id/listings/:listing_id' render={() => <ListingDetails key={this.state.selectedListingId} addFavoritedListing={this.addFavoritedListing} listingId={this.state.selectedListingId} listings={this.state.listings}/>} />
      </main>
    )
  }
}
export default App;
