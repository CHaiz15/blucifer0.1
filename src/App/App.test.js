import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import { getData, fetchAreaDetails, fetchListings } from '../apiCalls/apiCalls'

jest.mock('../apiCalls/apiCalls.js')

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    getData.mockImplementation(() => {
      return Promise.resolve({ areas: [
        {
          area: "RiNo",
          details: '/api/v1/areas/590'
        }
      ]})
    });

    fetchAreaDetails.mockImplementation(() => {
      return Promise.resolve({ areas: [
        {
          id: 1,
          shortName: 'RiNo',
          name: 'Rhino',
          location: 'Denver',
          about: 'Cool place',
          listings: '/api/v1/listings/3'
        }
      ]})
    });

    fetchListings.mockImplementation(() => {
      return Promise.resolve({ areas: [
        {
          listing_id: 3,
          area_id: 590,
          name: 'RiNo',
          address: '123 Happy street',
          details: []
        }
      ]})
    });
  });

  it('should be an instance of App component', () => {
    wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should retrieve areas when mounting', () => {
    wrapper = shallow(<App />);
    expect(getData).toHaveBeenCalled();
  });

  it('should retrieve area details when mounting', () => {
    wrapper = shallow(<App />);
    expect(fetchAreaDetails).toHaveBeenCalled();
  });

  it('should retrieve listings when mounting', () => {
    wrapper = shallow(<App />);
    expect(fetchAreaDetails).toHaveBeenCalled();
  });

  it('it should have default state', () => {
    wrapper = shallow(<App />);
    expect(wrapper.state('areas')).toEqual([]);
    expect(wrapper.state('listings')).toEqual([]);
    expect(wrapper.state('selectedAreaId')).toEqual('');
    expect(wrapper.state('selectedListingId')).toEqual('');
    expect(wrapper.state('user')).toEqual({name: '', purpose: ''});
    expect(wrapper.state('favoriteListings')).toEqual([]);
  });

  it('should update user when addFormInfo is called', () => {
    const mockFormInfo = {name: 'John Doe', purpose: 'Business'};
    wrapper.instance().addFormInfo(mockFormInfo);
    expect(wrapper.state('user')).toEqual({name: 'John Doe', purpose: 'Business'});
  });

  it('should update selectedAreaId when addSelectedArea is called', () => {
    const mockSelectedAreaId = 590;
    wrapper.instance().addSelectedArea(mockSelectedAreaId);
    expect(wrapper.state('selectedAreaId')).toEqual(590);
  });

  it('should update selectedListingId when addSelectedListing is called', () => {
    const mockSelectedListingId = 3;
    wrapper.instance().addSelectedListing(mockSelectedListingId);
    expect(wrapper.state('selectedListingId')).toEqual(3);
  });

  it('should add a favoriteListingId to favoriteListings when addFavoritedListing is called', () => {
    const mockfavoriteListingId = 3;
    wrapper.instance().addFavoritedListing(mockfavoriteListingId);
    expect(wrapper.state('favoriteListings')).toEqual([3]);
  });

  it('should remove a favoriteListingId from favoriteListings when removeFavoritedListing is called', () => {
    const mockremovefavoriteListingId = 3;
    expect(wrapper.state('favoriteListings')).toEqual([3]);
    wrapper.instance().removeFavoritedListing(mockremovefavoriteListingId);
    expect(wrapper.state('favoriteListings')).toEqual([]);
  });
})