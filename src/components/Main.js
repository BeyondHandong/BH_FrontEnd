import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MainCheck from './MainCheck'
import Search from './Search'



export default function Main(props) {
    const classes = useStyles();
    return (
      <div>
      <MainCheck></MainCheck>
      <Search type={props.type}></Search>
    </div>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
  
    },
    mainTitle: {
      fontSize: 30,
      marginBottom: theme.spacing(10)
    },
    mainCheck: {
      fontSize: 30,
      margin: theme.spacing(10)
    },
  }));
  
  