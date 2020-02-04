import React from 'react';
import './AreaCard.css';

const AreaCard = ({ areaName }) => {
  return (
    <div className="area-card">
      <h1>{areaName}</h1>
    </div>
  )
}

export default AreaCard;
