import React, { Component } from 'react';
import './App.css';
import { fetchAreaDetails } from '../helpers'

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
      null
    )
  }
}
export default App;
