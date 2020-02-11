import React from 'react';
import Favorites from './Favorites';
import { shallow } from 'enzyme'

describe('Favorites', () => {
  it('should be an instance of Favorites component', () => {
    const wrapper = shallow(
    <Favorites
      addSelectedListing={jest.fn()}
      listings={[]}
      favoriteListings={[]}
      selectedAreaId={1}
    />);
      expect(wrapper).toMatchSnapshot();
  });
})