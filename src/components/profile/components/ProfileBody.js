import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tabs from './Tabs';
import ProfileBodyCard from './ProfileBodyCard';

/* Manipulates the profile details into a form that can be passed onto the
 * Tab component.
 */
class ProfileBody extends Component {
  render() {
    // The bodyData is an object with keys as the tab heading and the value as a
    // list of all the cards associated with tab to display
    // For example:
    // {
    //    "💡 Interests": [
    //       "<ProfileBodyCard />",
    //       "<ProfileBodycard />"
    //    ]
    // }
    // This is passed into the Tabs component to actually render the profile details
    const bodyData = {};

    this.props.userDetails.forEach((detailedInformation) => {
      const { category, cards } = detailedInformation;
      bodyData[category] = cards.map((card) => {
        return <ProfileBodyCard category={category} card={card} />;
      });
    });

    return <Tabs tabData={bodyData} />;
  }
}

ProfileBody.propTypes = {
  userDetails: PropTypes.array.isRequired
};

export default ProfileBody;
