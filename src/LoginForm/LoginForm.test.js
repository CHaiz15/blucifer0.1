import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';
import { shallow } from 'enzyme';

describe('LoginForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginForm/>);
  })

  describe('Default state', () => {
  
    it('should be an instance of LoginForm component', () => {
        expect(wrapper).toMatchSnapshot();
    });
  
    it('should start state with default name', () => {
      expect(wrapper.state('name')).toEqual('')
    })
  
    it('should start state with default email', () => {
      expect(wrapper.state('email')).toEqual('')
    })
  
    it('should start state with default purpose', () => {
      expect(wrapper.state('purpose')).toEqual('') 
    })
  
    it('should start state with default showError', () => {
      expect(wrapper.state('showError')).toEqual(false) 
    })
  
    it('should start state with default formFilled', () => {
      expect(wrapper.state('formFilled')).toEqual(false)
    })
  })

  describe('updateChange', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<LoginForm />);
    })
    it('should change state of name if form is updated', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'name',
          value: 'Kim'
        }
      }

      wrapper.instance().updateChange(mockEvent)
      expect(wrapper.state('name')).toEqual('Kim')
    })

    it('should change state of name if form is updated', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'email',
          value: 'kim@kim.com'
        }
      }

      wrapper.instance().updateChange(mockEvent)
      expect(wrapper.state('email')).toEqual('kim@kim.com')
    })

    it('should change state of name if form is updated', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'purpose',
          value: 'business'
        }
      }

      wrapper.instance().updateChange(mockEvent)
      expect(wrapper.state('purpose')).toEqual('business')
    })
  })

  describe('submitForm', () => {
    let wrapper;
    const mockAddFormInfo = jest.fn();

    beforeEach(() => {
      wrapper = shallow(<LoginForm addFormInfo={mockAddFormInfo} />);
    })
    it('should change state of formFilled if form is filled', () => {
      const mockEvent = {preventDefault: jest.fn()}
      wrapper.setState({
        name: 'Kim',
        email: 'kim@kim.com',
        purpose: 'business'
      })
      wrapper.instance().submitForm(mockEvent)
      expect(wrapper.state('formFilled')).toEqual(true)
    })

    it('should change state of showError if form is not filled', () => {
      const mockEvent = {preventDefault: jest.fn()}
      wrapper.setState({
        name: '',
        email: '',
        purpose: 'business'
      })
      wrapper.instance().submitForm(mockEvent)
      expect(wrapper.state('showError')).toEqual(true)
    })
  })
})