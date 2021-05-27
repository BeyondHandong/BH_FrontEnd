import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TabVerTopBar from './TabVerTopBar'
import { Provider } from '../Context';
import { Parallax } from 'react-parallax';


export default function Home() {
  const classes = useStyles();

  return (
        <Parallax className={classes.parallax}  blur={0} bgImage="https://static.wixstatic.com/media/11062b_7d8badf22ed9415e8c2974ee130d4943~mv2.jpg" bgImageAlt="santorini" strength={200}>
          <Provider>
            <TabVerTopBar></TabVerTopBar>
          </Provider>
        </Parallax>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  mainTitle: {
    fontSize: 30,
    marginBottom: theme.spacing(10)
  },
  mainCheck: {
    fontSize: 30,
    margin: theme.spacing(10)
  },
  parallax: {
    height: '100%',
    flex: 1,
    minHeight: "100%",
    minHeight: "1000px",
  }
}));
