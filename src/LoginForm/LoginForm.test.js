import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';
import { shallow } from 'enzyme'

describe('LoginForm', () => {
  it('should be an instance of LoginForm component', () => {
    const wrapper = shallow(<LoginForm/>);
      expect(wrapper).toMatchSnapshot();
  });
})