import React, { Component } from 'react';
import './App.css';
import { fetchAreaDetails } from '../helpers';
import LoginForm from '../LoginForm/LoginForm.js';
import Header from '../Header/Header.js';
import AreasContainer from '../AreasContainer/AreasContainer.js';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: [],
      user: {
        name: '',
        purpose: ''
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areaData => fetchAreaDetails(areaData))
      .then(areas => this.setState({areas: areas}))
  }

  addFormInfo = (info) => {
    this.setState({user: info})
  }

  render() {
    return (
      <main>
        <Route exact path='/' render={() => <LoginForm addFormInfo={this.addFormInfo}/>} />
        <Route path='/nav' render={() => <Header name={this.state.user.name} purpose={this.state.user.purpose}/>} />
        <Route path='/nav/areas' render={() => <AreasContainer areas={this.state.areas}/>} />
      </main>
    )
  }
}
export default App;
