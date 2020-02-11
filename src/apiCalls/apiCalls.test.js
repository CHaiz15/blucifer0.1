import { getData, fetchAreaDetails, fetchListings } from './apiCalls';

describe('apiCalls', () => {
  let mockResponse = { areas: [
    {
      area: "RiNo",
      details: '/api/v1/areas/590'
    }
  ]};
  let mockResponse2 = [
    {
      id: undefined,
      shortName: 'RiNo',
      name: undefined,
      location: undefined,
      about: undefined,
      listings: undefined
    }
  ];
  let mockListing = [
    '/api/v1/listings/3',
  ];
  let mockResponse3 = { listings: [
    {
      listing_id: undefined,
      area_id: undefined,
      name: undefined,
      address: undefined,
      details: undefined
    }
  ]};
  let mockError = Error('Error while fetching, did not get a 200 status code!');

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getData();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas');
  });

  it('should return an array of areas (HAPPY)', () => {
    expect(getData()).resolves.toEqual(mockResponse)
  });

  it('should return an error if the response is not OK (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });
    expect(getData()).rejects.toEqual(mockError)
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(mockError)
    })
    expect(getData()).rejects.toEqual(mockError)
  });

  it('should call fetch with the correct url', () => {
    fetchAreaDetails(mockResponse);
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas/590');
  });

  it('should return an object of area details (HAPPY)', () => {
    expect(fetchAreaDetails(mockResponse)).resolves.toEqual(mockResponse2)
  });

  it('should call fetch with the correct url', () => {
    fetchListings(mockListing);
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/listings/3');
  });

  it('should return an object of listing details (HAPPY)', () => {
    expect(fetchListings(mockListing)).resolves.toEqual(mockResponse3)
  });
});

