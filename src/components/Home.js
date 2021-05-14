import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TopBar from './TopBar'
import MainCheck from './MainCheck'
import Search from './Search'
import Table from './Table'
import { Provider } from '../Context';
import { Parallax } from 'react-parallax';

const Container = () => (
  <Parallax blur={0} bgImage="https://static.wixstatic.com/media/11062b_7d8badf22ed9415e8c2974ee130d4943~mv2.jpg" bgImageAlt="santorini" strength={200}>
      <Provider>
      <TopBar></TopBar>
      {/* <MainTitle className={classes.mainTitle}></MainTitle> */}
      <MainCheck></MainCheck>
      <Search></Search>
      <Table></Table>
    </Provider>
  </Parallax>
);

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
      <Container></Container>
  );
}