import React from 'react';
import ListingDetails from './ListingDetails';
import { shallow } from 'enzyme'

describe('ListingDetails', () => {
  let wrapper;
  const mockAddFavoritedListing = jest.fn()
  const mockRemoveFavoritedListing = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
    <ListingDetails 
        key={3}
        addFavoritedListing={mockAddFavoritedListing}
        removeFavoritedListing={mockRemoveFavoritedListing} 
        selectedListingId={3} 
        listings={[{
          listing_id: 3,
          area_id: 590,
          name: "Hip RiNo Party Spot",
          address: {
              street: "2250 Lawrence St",
              zip: "80205"
          },
          details: {
              beds: 3,
              baths: 2.5,
              cost_per_night: 420,
              features: [
                  "hot tub",
                  "espresso machine"
              ]
    }
  }]} 
        favoriteListings={[]}
    />);
  })
  it('should be an instance of ListingDetails component', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should start state with default not favorited', () => {
    expect(wrapper.state('favorited')).toEqual(false)
  })

  it('should check if not favorited and change to favorited', () => {
    wrapper.instance().checkFavorited()
    expect(wrapper.state('favorited')).toEqual(true)
  })

  it('should check if favorited and change to unfavorited', () => {
    wrapper.setState({favorited: true})
    wrapper.instance().checkFavorited()
    expect(wrapper.state('favorited')).toEqual(false)
  })
})