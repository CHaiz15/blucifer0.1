export const fetchAreaDetails = (areaData) => {
  const promises = areaData.areas.map(area => {
    return fetch('http://localhost:3001' + area.details)
      .then(response => response.json())
      .then(areaDetails => {
        return {
          id: areaDetails.id,
          shortName: area.area || area.name,
          name: areaDetails.name,
          location: areaDetails.location,
          about: areaDetails.about,
          listings: areaDetails.listings
          }
      })
  })
  return Promise.all(promises)
}

export const fetchListings = (listings) => {
  const promises = listings.map(listing => {
    return fetch('http://localhost:3001' + listing)
      .then(response => response.json())
      .then(listingDetails => {
        return {
          listing_id: listingDetails.listing_id,
          area_id: listingDetails.area_id,
          name: listingDetails.name,
          address: listingDetails.address,
          details: listingDetails.details,
        }
      })
  })
  return Promise.all(promises)
}
