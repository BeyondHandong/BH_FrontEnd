import React, { Component } from 'react';
import PropTypes from 'prop-types';

import profilePicture from '../assets/profile.png';

import './ProfileHeader.css';

/* Renders the most important, "at a glance" information about the user.
 * Styled to be attention grabbing for the viewer
 */
class ProfileHeader extends Component {
  render() {
    const userData = this.props.userData;

    return (
      <div className='profile-header'>
        <img src={profilePicture} className='profile-picture' alt='Profile' />
        <div className='profile-name'>{userData.fullName.toUpperCase()}</div>
        <div className='profile-tagline'>{userData.tagLine}</div>
        <div className='profile-links'>
          🖥&nbsp;
          <a
            href={'https://' + userData.website}
            target='_blank'
            rel='noopener noreferrer'
          >
            {userData.website}
          </a>
          &nbsp;•&nbsp; 🐦 @
          <a
            href={'https://twitter.com/' + userData.twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            {userData.twitter}
          </a>
        </div>
      </div>
    );
  }
}

// React allows us to typecheck the props that we are provided
ProfileHeader.propTypes = {
  userData: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    tagLine: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired
  }).isRequired
};

export default ProfileHeader;
