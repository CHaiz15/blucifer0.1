import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  it('should be an instance of App component', () => {
    const wrapper = shallow(<App/>);
      expect(wrapper).toMatchSnapshot();
  });
})