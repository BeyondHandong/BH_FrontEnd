import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";

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
    backgroundColor: "#D5E7F2",
    float: "right",
    marginRight: '120px',
    marginBottom: '20px',
  }
}));

export default function SubmitButton(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <br />
          <Button
            className={classes.newButton}
            variant="contained"
            color="inherit"
            endIcon={<CreateIcon />}
          >
            등록하기
          </Button>
    </React.Fragment>
  );
}
