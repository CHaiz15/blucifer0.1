import React, { Component } from 'react'

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      purpose: ''
    }
  }
  updateChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <form>
        <input
          name='name'
          placeholder="Name..."
          value={this.state.name}
          onChange={this.updateChange}
        />
        <input
          placeholder="Email..."
        />
        <div>
          <button
            name='purpose'
            value='Business'
            onClick={this.updateChange}
          >Business</button>
          <button
            name='purpose'
            value='Vacation'
            onClick={this.updateChange}
          >Vacation</button>
          <button
            name='purpose'
            value='Travel'
            onClick={this.updateChange}
          >Other</button>
        </div>
        <button>Explore</button>
      </form>
    )
  }
}

export default LoginForm;
