import React from 'react';
import {Provider} from '../Context'
import SignIn from './SignIn'


export default function Login() {  
  return (
    <Provider>
        <SignIn></SignIn>
    </Provider>
  );
}