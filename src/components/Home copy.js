import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TopBar from './TopBar'
import MainCheck from './MainCheck'
import Search from './Search'
import Table from './Table'
import { Provider } from '../Context';

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


export default function Home() {
  const classes = useStyles();

  return (
    <Provider>
      <TopBar></TopBar>
      {/* <MainTitle className={classes.mainTitle}></MainTitle> */}
      <MainCheck className={classes.mainCheck}></MainCheck>
      <Search></Search>
      <Table></Table>
    </Provider>
  );
}