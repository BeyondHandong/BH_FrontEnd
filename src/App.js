import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Home from './components/Home'
import Write from './Pages/Write'
import Detail from './Pages/Detail'
import Profile from './components/profile/profile'



export default function App() {

  return (
    <div >
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/write" component={Write} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/profile" component={Profile} />
    </div>
  );
}
