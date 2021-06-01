import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Toggle.css';

/* Button which displays the current dark mode state and toggles
 * the dark mode state when pressed.
 *
 * Props:
 *  isDarkMode (bool): Represents current dark mode state
 *  toggleDarkMode (func): Function that is called when this toggle
 *                         button is pressed
 */
class DarkModeToggle extends Component {
  handleClick = () => {
    this.props.toggleDarkMode && this.props.toggleDarkMode();
  };

  render() {
    return (
      <div className="darkModeToggle" onClick={this.handleClick}>
        <span className="darkModeToggleButton">●</span>
        <span className="darkModetoggleText">
          Dark mode {this.props.isDarkMode ? 'on' : 'off'}
        </span>
      </div>
    );
  }
}

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default DarkModeToggle;
