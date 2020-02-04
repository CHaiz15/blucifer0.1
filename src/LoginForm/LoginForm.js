import React, { Component } from 'react'
import './LoginForm.css'

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

  submitForm = (e) => {
    e.preventDefault()
    this.props.addFormInfo(this.state)
  }

  render() {
    return (
      <form className='login-form'>
        <label>Name</label>
        <input
          name='name'
          placeholder='Name...'
          value={this.state.name}
          onChange={this.updateChange}
        />
        <label>Email</label>
        <input
          placeholder='Email...'
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
        <button onClick={this.submitForm}>Explore</button>
      </form>
    )
  }
}

export default LoginForm;
