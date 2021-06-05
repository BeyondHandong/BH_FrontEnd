import React from 'react';
import PropTypes from 'prop-types';

import profilePicture from '../assets/profile.png';

import './ProfileHeader.css';
import useAsync from '../../../api/useAsync';
import * as api from '../../../api/post';
import {useUser} from '../../../Context'
import ScrapTable from '../../ScrapTable'

/* Renders the most important, "at a glance" information about the user.
 * Styled to be attention grabbing for the viewer
 */


export default function ProfileHeader() {

  console.log(window.localStorage.getItem("user"));
  const [state] = useAsync(() => api.getUserInfo(window.localStorage.getItem("user")), [window.localStorage.getItem("user")]);
  
  const { loading, data: userData, error } = state;
  
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>로그인을 해주세요 <br /><br /><a href="signin"> 로그인</a></div>;
  if (!userData) return null;

  //delay
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const logout = async (e) => {
    e.preventDefault();
    window.localStorage.setItem('user', "");
    window.localStorage.setItem('name', "");
    await delay(2000);
    window.location.href=`/signin`;
  }
    return (
      <div className='profile-header'>
        <img src={profilePicture} className='profile-picture' alt='Profile' />
        <div className='profile-name'>{userData.name}</div>
        <div className='profile-name'>{userData.email}</div>
        <div className='profile-tagline'>{userData.studentId}</div>
        <div className='profile-links'>
          🖥&nbsp;
          <a
            target='_blank'
            rel='noopener noreferrer'
          >
            한동대학교
          </a>
          &nbsp;•&nbsp; 🐦  
          <a
            onClick={logout}
            target='_blank'
            rel='noopener noreferrer'
          >
            로그아웃
          </a>
        </div>
        <br /><br />
        <ScrapTable></ScrapTable>
      </div>
    );
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


