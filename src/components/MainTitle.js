import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import Popup from '../Pages/Popup'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    borderBottom: `1.5px solid #262626`,
    display: "flex",
    justifyContent: "space-between",
  },
  pageTitle: {
    fontSize: 30,
    marginBottom: theme.spacing(1)
  },
  newButton: {
    maxWidth: "300px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: 30,
    backgroundColor: "#f0f3f5",
  }
}));

export default function CheckboxLabels(props) {
  const classes = useStyles();
  let auth = window.localStorage.getItem('authKey');


  if (props.type == "info" && auth == 0){
    return (
      <React.Fragment>
        <Container maxWidth="lg" className={classes.root}>
            <Typography
              component="span"
              className={classes.pageTitle}
              color="inherit"
              gutterBottom
            >
              {props.title}
            </Typography>
            <Popup></Popup>
        </Container>
      </React.Fragment>
    );
  }else if(props.type == "info" && auth > 0){
    return (
      <React.Fragment>
        <Container maxWidth="lg" className={classes.root}>
            <Typography
              component="span"
              className={classes.pageTitle}
              color="inherit"
              gutterBottom
            >
              {props.title}
            </Typography>
            <Button
              onClick={event =>  window.localStorage.getItem("user") !== "" ? window.location.href=`write` : window.location.href=`signin`}
              className={classes.newButton}
              variant="contained"
              color="inherit"
              endIcon={<CreateIcon />}
            >
              새글쓰기
            </Button>
        </Container>
      </React.Fragment>
    );
  } else {
      return(
        <React.Fragment>
        <Container maxWidth="lg" className={classes.root}>
            <Typography
              component="span"
              className={classes.pageTitle}
              color="inherit"
              gutterBottom
            >
              {props.title}
            </Typography>
            <Button
              onClick={event =>  window.localStorage.getItem("user") !== "" ? window.location.href=`write` : window.location.href=`signin`}
              className={classes.newButton}
              variant="contained"
              color="inherit"
              endIcon={<CreateIcon />}
            >
              새글쓰기
            </Button>
        </Container>
      </React.Fragment>
      );
  }
}
