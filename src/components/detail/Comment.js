import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


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
  console.log(comment);

  const classes = useStyles();

  return (
    <>
      <div className={classes.comment}>
        <div className={classes.commentText}>
          <div className={classes.commentAuthor}>
            <Typography variant="body2" component="p">
              {comment.writerName}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.commentTime}
            >
              {comment.writeDate}
            </Typography>
          </div>
          <Typography variant="body2" component="p">
            {comment.content}
          </Typography>
        </div>
      </div>
    </>
  );
}
