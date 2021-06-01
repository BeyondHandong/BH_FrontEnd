import React from 'react';
import logo from '../pic/paper_plane_20.png'; // Tell webpack this JS file uses this image
import { makeStyles } from '@material-ui/core/styles';

console.log(logo); // /logo.84287d09.png

const useStyles = makeStyles((theme) => ({
    logo: {
      height: '36.25px',
      width: '110.25px'
    }
}));
export default function Logo() {
    const classes = useStyles();
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" className={classes.logo}/>
}
