import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


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
    backgroundColor: "",
  }
}));

export default function CheckboxLabels(props) {
  const classes = useStyles();

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
      </Container>
    </React.Fragment>
  );
}
