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

  selectArea = () => {
    this.props.addSelectedArea(this.props.id)
  }

  render() {
    let hoveredCard =
      <div value={this.props.id} onClick={this.selectArea} className='hovered-card'>
        <h2>{this.props.shortName}</h2>
        <p>{this.props.about}</p>
      </div>;
    let originalCard = <h1 className="card-title">{this.props.areaName}</h1>;

    return (
      <div
        onMouseOver={this.hoverTrue}
        onMouseLeave={this.hoverFalse}
        className="card-div"
      >
        {this.state.hover ? hoveredCard : originalCard}
      </div>
    )
  }
}

export default AreaCard;
