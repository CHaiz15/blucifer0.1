import React, { Component } from 'react'
import './LoginForm.css'
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      purpose: '',
      showError: false,
      formFilled: false
    }
  }
  updateChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.email && this.state.purpose) {
      this.props.addFormInfo(this.state);
      this.setState({formFilled: true})
    } else {
      this.setState({showError: true})
    }
  }

  render() {
    if(this.state.formFilled) {
      return(
        <Redirect to="/nav/areas" />
      )
    }

    return (
    <main className='main-content'>
      <form className='login-form'>
        <h1>Blucifer BnB</h1>
        <label>Name</label>
        <input
          name='name'
          placeholder='Name...'
          value={this.state.name}
          onChange={this.updateChange}
        />
        <label>Email</label>
        <input
          name='email'
          placeholder='Email...'
          value={this.state.email}
          onChange={this.updateChange}
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
        <h4
        className={this.state.showError ? 'input-error':'hidden'}
        >Please fill all inputs.</h4>
      </form>
    </main>
    )
  }
}

export default LoginForm;
