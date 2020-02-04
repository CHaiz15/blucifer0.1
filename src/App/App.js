import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(data => console.log(data))
      // .then(staffData => fetchStaffBios(staffData))
      // .then(staff => this.setState({staff}))
  }

  render() {
    return (
      null
    )
  }
}
export default App;
