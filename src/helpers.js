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
          }
      })
  })
  return Promise.all(promises)
}
