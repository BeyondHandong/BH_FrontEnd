import React from 'react';
import TopBar2 from '../components/TopBar2'
import { Provider } from '../Context';
import TextArea from '../components/TextArea'
import {makeStyles } from "@material-ui/core/styles";
import CheckBox from '../components/CheckBox'


const useStyles = makeStyles((theme) => ({
  textarea: {
    display: 'flex',
    maxWidth: "1200px",
    align: "center",
    marginTop: theme.spacing(5),
    marginLeft: "auto",
    marginRight: "auto",
    border: '2px solid rgba(0, 0, 0, 0.05)',
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