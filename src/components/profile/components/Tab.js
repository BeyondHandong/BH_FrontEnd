import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* An individual tab which resides within the tab list that is
 * displayed on the left.
 *
 * Props:
 *  label (string): The label of this tab
 *  activeTab (string): The label of the active tab
 *  onClick (func): Function passed by calling component to be called on tab click
 */
class Tab extends Component {
  handleClick = () => {
    // Telling the calling component (Tabs) that this component was clicked
    this.props.onClick(this.props.label);
  };

  render() {
    let className = 'tab-list-item';

    if (this.props.activeTab === this.props.label) {
      className += ' tab-list-active';
    }

    return (
      <li
        key={this.props.label}
        className={className}
        onClick={this.handleClick}
      >
        {this.props.label}
      </li>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Tab;
