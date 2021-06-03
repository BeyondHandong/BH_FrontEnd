import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MainCheck from './MainCheck'
import CountryButton from './CountryButton'
import Table from './Table'

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

export default function Main(props) {
    const classes = useStyles();
    return (
      <div>
      <MainCheck></MainCheck>
      <CountryButton type={props.type}></CountryButton>
      <Table type={props.type}></Table>
    </div>
    );
  }
  
  
  
  