import React from 'react';
import TopBar2 from '../components/TopBar2'
import { Provider } from '../components/write/WriteContext';
import TextArea from '../components/write/TextArea'
import CheckBox from '../components/write/CheckBox'
import {makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  textarea: {
    display: 'flex',
    maxWidth: "1200px",
    align: "center",
    marginTop: theme.spacing(5),
    marginLeft: "auto",
    marginRight: "auto",
    border: '1px solid rgba(0, 0, 0, 0.15)',
  },
}));


export default function Write() {
  const classes = useStyles();

  return (
    <Provider>
      <TopBar2></TopBar2>
      {/* <MainTitle className={classes.mainTitle}></MainTitle> */}
      {/*<MainCheck className={classes.mainCheck}></MainCheck> */}
      
      <div className={classes.textarea}>
        <TextArea></TextArea>
      </div>
      <CheckBox></CheckBox>
        
    </Provider>
  );
}