import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TopBar from './components/TopBar'
import MainCheck from './components/MainCheck'

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


export default function App() {
  const classes = useStyles();

  return (
    <div >
      <TopBar></TopBar>
      {/* <MainTitle className={classes.mainTitle}></MainTitle> */}
      <MainCheck className={classes.mainCheck}></MainCheck>
    </div>
  );
}
