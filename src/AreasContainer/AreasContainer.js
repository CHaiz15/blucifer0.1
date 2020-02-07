import React from 'react';
import './AreasContainer.css'
import AreaCard from '../AreaCard/AreaCard.js'
import { Link } from 'react-router-dom';

const AreasContainer = ({ areas }) => {
  const appendedAreas = areas.map(area => 
    <Link className="areas-container" to={`/nav/areas/${area.id}`}>
      <AreaCard 
        id={area.id}
        areaName={area.name} 
        shortName={area.shortName} 
        about={area.about} 
        listings={area.listings}
      />
    </Link>
  )
  return(
    <>
      <h2 className="areas-title">Pick a neighborhood</h2>
      <section>
        {appendedAreas}
      </section>
    </>
  )
}

export default AreasContainer;
