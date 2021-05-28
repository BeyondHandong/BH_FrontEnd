import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MainCheck from './MainCheck'
import Search from './Search'
import Table from './Table'


export default function Main(props) {
    const classes = useStyles();
    return (
      <div>
      <MainCheck></MainCheck>
      <Search></Search>
      <Table type={props.type}></Table>
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
  
  