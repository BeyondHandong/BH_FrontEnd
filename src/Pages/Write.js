import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TopBar2 from '../components/TopBar2'
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
      <TopBar2></TopBar2>
      {/* <MainTitle className={classes.mainTitle}></MainTitle> */}
      {/*<MainCheck className={classes.mainCheck}></MainCheck> */}
    </Provider>
  );
}