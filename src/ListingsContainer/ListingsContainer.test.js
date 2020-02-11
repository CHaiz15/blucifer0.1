import React from 'react';
import { render } from '@testing-library/react';
import ListingsContainer from './ListingsContainer';
import { shallow } from 'enzyme'

describe('ListingsContainer', () => {
  it('should be an instance of ListingsContainer component', () => {
    const wrapper = shallow(
        <ListingsContainer
            addSelectedListing={jest.fn()}
            selectedAreaId='590'
            listings={[]}
            areas={[{
              id: 590,
              name: "River North",
            }]}
        />);
      expect(wrapper).toMatchSnapshot();
  });
})