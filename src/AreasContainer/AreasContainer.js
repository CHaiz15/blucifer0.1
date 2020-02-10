import React from 'react';
import './AreasContainer.css'
import AreaCard from '../AreaCard/AreaCard.js'
import { Link } from 'react-router-dom';

const AreasContainer = ({ areas, addSelectedArea }) => {
  const appendedAreas = areas.map(area => 
    <Link className="area-card" to={`/nav/areas/${area.id}/listings`}>
      <AreaCard 
        addSelectedArea={addSelectedArea}
        id={area.id}
        areaName={area.name} 
        shortName={area.shortName} 
        about={area.about} 
        listings={area.listings}
      />
    </Link>
  )
  return(
    <section className="post-login">
      <h2 className="areas-title">Pick a neighborhood</h2>
      <section className="areas-container">
        {appendedAreas}
      </section>
    </section>
  )
}

export default AreasContainer;
