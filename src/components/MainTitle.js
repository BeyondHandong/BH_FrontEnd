import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    borderBottom: `1.5px solid #262626`
  },
  pageTitle: {
    fontSize: 30,
    marginBottom: theme.spacing(3)
  },
  newButton: {
    maxWidth: "300px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: 30
  }
}));

export default function CheckboxLabels(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={4} justify="space-between">
          <Typography
            className={classes.pageTitle}
            align="Left"
            color="#262626"
            gutterBottom
          >
            {props.title}
          </Typography>
          <Button
            className={classes.newButton}
            variant="contained"
            color="#F2F2F2"
            endIcon={<CreateIcon />}
          >
            새글쓰기
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
