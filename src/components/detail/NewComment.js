import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";

import useAsync from '../../api/useAsync';
import * as api from '../../api/post';

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",
    padding: 16
  },
  paper: {
    // backgroundColor: "red",
    padding: "4px 16px",
    flexGrow: 1,
    marginLeft: 16
  },
  input: {
    // backgroundColor: "blue",
    width: "100%"
  },
  iconButton: {
    maxWidth: "40px",
    maxHeight: "40px",
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: 0,
    backgroundColor: "#D5E7F2",
    fontSize: 12,
    margin: 10,
  },
  divider: {
    width: 1,
    height: 24
  }
}));

export default function SendComment(props) {
  const classes = useStyles();

  const [value, setValue] = useState("");

  const handleOnChange = e => {
    setValue(e.target.value);
  };

  const handleClick = e => {
    console.log(props.id);
    var data = new Object(); 
    data.postId = props.id; 
    data.content = value;
    data.writerId = 1;
    data.writerName = "남진우";
    var jsonData = JSON.stringify(data);
    api.sendComment(jsonData, [jsonData]);
    console.log(jsonData);
    setValue('');
  };

  return (
    <div id="comment-send" className={classes.root}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Paper className={classes.paper}>
        <InputBase
          value={value}
          className={classes.input}
          placeholder="Write a Comment"
          inputProps={{ "aria-label": "search" }}
          onChange={handleOnChange}
        />
      </Paper>
        <Button
            className={classes.iconButton}
            variant="text"
            color="inherit"
            startIcon={<CreateIcon />}
            onClick={handleClick}
          >
        </Button>
    </div>
  );
}
