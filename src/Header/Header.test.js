import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { shallow } from 'enzyme'

describe('Header', () => {
  it('should be an instance of Header component', () => {
    const wrapper = shallow(<Header/>);
      expect(wrapper).toMatchSnapshot();
  });
})