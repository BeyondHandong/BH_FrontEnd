import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
import warning from '../pic/warning.png'; 

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "300px",
        maxHeight: "30px",
        minWidth: "30px",
        minHeight: "30px",
        borderRadius: 30,
        backgroundColor: "#f0f3f5",
    },
    button: {
        width:'14px',
        height: '14px',
        shadowColor: 'black',
        shadowRadius: 15 ,
        shadowOffset : { width: 56, height: 13},
        shadowOpacity: 0.8,
    }
  }));

export default function Example() {
    const classes = useStyles();
    return (
        <ReactCircleModal
        backgroundColor="#5A98BF"
        toogleComponent={onClick => (
            <Button
            onClick={onClick}
            className={classes.root}
            variant="contained"
            color="inherit"
            endIcon={<CreateIcon />}
          >
            새글쓰기
          </Button>
        )}
        // Optional fields and their default values
        offsetX={100}
        offsetY={100}
        >
        {(onClick) => (
            <div style={{ backgroundColor: '#f0f3f5', padding: '1em' }} align = "center">
            <p>
                <h1>끌쓰기 권한 확인!!</h1>
                <br/>
                해외에 다녀 오신 분이나 정보의 목적의 글을 작성하고자 하시는 분만 '정보게시판'에 글을 남겨주세요!
                <br/><br/><img src={warning} alt="Logo" className={classes.logo} height="100px" width="100px"/>
            </p>
            <Button
            onClick={event =>  window.location.href=`write`}
            className={classes.root}
            variant="contained"
            color="inherit"
            endIcon={<CreateIcon />}
          >
            새글쓰기
          </Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Button
            onClick={onClick}
            className={classes.root}
            variant="contained"
            color="inherit"
          >
            Close
          </Button>
            </div>
        )} 
        </ReactCircleModal>
    )
}

