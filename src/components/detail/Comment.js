import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import moment from "moment";


const useStyles = makeStyles({
  comment: {
    display: "flex",
    // alignItems: "center",
    margin: 16
  },
  commentText: {
    padding: "8px",
    flexGrow: "1",
    marginLeft: "16px",
    borderRadius: "4px",
    backgroundColor: "#F4F6F8"
  },
  commentAuthor: {
    display: "flex",
    // alignItems: "center",
    marginBottom: 16
  },
  commentTime: {
    marginLeft: "auto"
  }
});

export default function Comment({ comment }) {
  // console.log(data);

  const { _id, user_id, name, avatar, text, created_at } = comment;
  console.log(comment);

  const classes = useStyles();

  return (
    <>
      <div className={classes.comment}>
        <Avatar alt={avatar} src={avatar} />
        <div className={classes.commentText}>
          <div className={classes.commentAuthor}>
            <Typography variant="body2" component="p">
              {name}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.commentTime}
            >
              시간
            </Typography>
          </div>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </div>
      </div>
    </>
  );
}
