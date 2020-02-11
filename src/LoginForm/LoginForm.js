import React, { Component } from 'react'
import PropTypes from 'prop-types';
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
        <h1 className='title'>BLUCIFER BNB</h1>
          <form className='login-form'>
            <h3 className="text-center">LOGIN</h3>
              <div className="input-container">
                <input 
                required
                type="text" 
                className='user-input'
                name='name'
                value={this.state.name}
                onChange={this.updateChange}
                autoComplete="off"
                />
                <label>Full Name</label>		
              </div>
              <div className="input-container">		
                <input 
                required
                type="mail" 
                className='user-input'
                name='email'
                value={this.state.email}
                onChange={this.updateChange}
                autoComplete="off"
                />
                <label>Email</label>
              </div>
              <div className='purpose-buttons'>
                <button
                  className='purpose-btn'
                  name='purpose'
                  value='Business'
                  onClick={this.updateChange}
                >BUSINESS</button>
                <button
                  className='purpose-btn'
                  name='purpose'
                  value='Vacation'
                  onClick={this.updateChange}
                >VACATION</button>
                <button
                  className='purpose-btn'
                  name='purpose'
                  value='Travel'
                  onClick={this.updateChange}
                >OTHER</button>
              </div>
                <button type="button" className="explore-btn" onClick={this.submitForm}>EXPLORE DENVER</button>
                <h4
                className={this.state.showError ? 'input-error':'hidden'}
                >Please fill all inputs.</h4>
          </form>
      </main>
    )
  }
}

export default LoginForm;

LoginForm.propTypes = {
  addFormInfo: PropTypes.func
}
