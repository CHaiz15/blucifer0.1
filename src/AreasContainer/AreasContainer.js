import React from 'react';
import './AreasContainer.css'
import AreaCard from '../AreaCard/AreaCard.js'

const AreasContainer = ({ areas }) => {
  const appendedAreas = areas.map(area => <AreaCard areaName={area.name} shortName={area.shortName} about={area.about}/>)
  return(
    <>
      <h2 className="areas-title">Pick a neighborhood</h2>
      <section className="areas-container">
        {appendedAreas}
      </section>
    </>
  )
}

export default AreasContainer;
