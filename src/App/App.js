import React, { Component } from 'react';
import './App.css';
import { fetchAreaDetails } from '../helpers'
import LoginForm from '../LoginForm/LoginForm.js'
import Header from '../Header/Header.js'

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
      <div>
        <main className='main-content'>
          <h1>Blucifer BnB</h1>
          <LoginForm addFormInfo={this.addFormInfo}/>
        </main>
        <Header name={this.state.user.name} purpose={this.state.user.purpose}/>
      </div>
    )
  }
}
export default App;
