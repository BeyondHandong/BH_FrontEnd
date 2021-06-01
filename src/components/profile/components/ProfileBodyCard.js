import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProfileBodyCard.css';

/* Displays an individual profile detail in a structured way
 */
class ProfileBodyCard extends Component {
  render() {
    const category = this.props.category;
    const card = this.props.card;

    return (
      <div label={category} className='profile-card'>
        <div className='card-header'>{card.name}</div>
        {card.dateRange && (
          // Only create an element for the date range if the value is provided
          <div className='card-dates'>{card.dateRange}</div>
        )}
        <div className='card-description'>{card.description}</div>
      </div>
    );
  }
}

ProfileBodyCard.propTypes = {
  card: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired
};

export default ProfileBodyCard;
