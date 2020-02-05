import React, { Component } from 'react';
import './AreaCard.css';

  class AreaCard extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
  }
  hoverTrue = () => {
    this.setState({hover: true})
  }
  hoverFalse = () => {
    this.setState({hover: false})
  }
  render() {
    let hoveredCard =
      <div className='hovered-card'>
        <h1>{this.props.shortName}</h1>
        <p>{this.props.about}</p>
      </div>;
    let originalCard = <h1>{this.props.areaName}</h1>;

    return (
      <div
        className="area-card"
        onMouseOver={this.hoverTrue}
        onMouseLeave={this.hoverFalse}
      >
        {this.state.hover ? hoveredCard : originalCard}
      </div>
    )
  }
}

export default AreaCard;
