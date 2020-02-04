import React, { Component } from 'react';
import './App.css';
import { fetchAreaDetails } from '../helpers'
import LoginForm from '../LoginForm/LoginForm.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areaData => fetchAreaDetails(areaData))
      .then(areas => this.setState({areas: areas}))
  }

  render() {
    return (
      <main>
        <h1>Blucifer BnB</h1>
        <LoginForm />
      </main>
    )
  }
}
export default App;
