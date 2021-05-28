import React from 'react';
import OnlyTopBar from '../components/OnlyTopBar'
import { Provider } from '../components/write/WriteContext';
import TextArea from '../components/write/TextArea'
import WriteTotal from '../components/write/WriteTotal'
import {makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  textarea: {
    
    maxWidth: "1200px",
    align: "center",
    marginTop: theme.spacing(5),
    marginLeft: "auto",
    marginRight: "auto",
    border: '1px solid rgba(0, 0, 0, 0.15)',
  },
  boxes: {
    marginLeft: "120px",
    marginTop: theme.spacing(5),
  },
}));


export default function Write() {
  const classes = useStyles();

  return (
    <Provider>
      <OnlyTopBar></OnlyTopBar>
      {/* <MainTitle className={classes.mainTitle}></MainTitle> */}
      {/*<MainCheck className={classes.mainCheck}></MainCheck> */}
      
      {/* <div className={classes.textarea}>
        <TextArea></TextArea>
      </div> */}
      <div className={classes.boxes}>
        <WriteTotal></WriteTotal>
      </div>
        
    </Provider>
  );
}