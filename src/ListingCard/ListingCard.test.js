import React from 'react';
import { render } from '@testing-library/react';
import ListingCard from './ListingCard';
import { shallow } from 'enzyme'

describe('ListingCard', () => {
  it('should be an instance of ListingCard component', () => {
    const wrapper = shallow(<ListingCard/>);
      expect(wrapper).toMatchSnapshot();
  });
})