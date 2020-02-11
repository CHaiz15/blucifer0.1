import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <h2 className='short-name'>{this.props.shortName}</h2>
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

AreaCard.propTypes = {
  addSelectedArea: PropTypes.func,
  id: PropTypes.number,
  areaName: PropTypes.string,
  shortName: PropTypes.string, 
  about: PropTypes.string,
  listings: PropTypes.array,
}