import React from 'react';

import userData from './data/UserData.json';
import ProfileHeader from './components/ProfileHeader';
import './styles/colours.css';
import './profile.css';
import OnlyTopBar from '../OnlyTopBar'
import {Provider } from '../../Context';

export default function Profile() {
  const isDarkMode = false;
  const darkModeClass = isDarkMode ? 'dark' : 'light';

  return (
      <Provider>
            <OnlyTopBar></OnlyTopBar>
          <div className={'profile-container ' + darkModeClass}>
            <div className='profile'>
          <ProfileHeader userData={userData} />
        </div>
      </div>
      </Provider>
      

  )
}

/* 
  "Export" allows the component to be imported and used in other files. 
  We are using default exports throughout the project as it is convention 
  for React (with one class per file). The alternative is "named exports", 
  see the following for differences between default and named exports:
  LINK: 
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
*/

