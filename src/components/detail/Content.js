import React from "react";
import SendComment from "./NewComment";
import Comment from "./Comment";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ScheduleIcon from "@material-ui/icons/Schedule";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";

import Grid from '@material-ui/core/Grid';
import PersonIcon from "@material-ui/icons/Person";

import useAsync from '../../api/useAsync';
import * as api from '../../api/post';
import parse from 'html-react-parser';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFFFFF",
    minWidth: 275
  },
  postTitle: {
    paddingBottom: 0,
    paddingTop: 10,
    paddingLeft: 10
  },
  postAuthor: {
    edge: "end",
    fontSize: 12,
    ustifyContent: 'center',
    flexGrow: 1.5,
    align: "center",
  },
  postAuthorBlock: {
    "& > button": { marginLeft: 10 },
    display: "flex",
    alignItems: "center",
    marginBottom: 12
  },
  postText: {
    // backgroundColor: "red"
    marginBottom: 8,
    paddingTop: 10,
    paddingLeft: 10,
    minHeight: 250,
  },
  postTag: {
    // backgroundColor: "red",
    marginRight: 4
  },
  postCommentNum: {
    fontSize: 15,
    color: "#262626",
    paddingLeft: 15
    
  },
  postOptions: {
    // backgroundColor: "red"
  },
  postDateBlock: {
    display: "flex",
    alignItems: "center",
    marginBottom: 12
  },
  dateIcon: {
    color: "#546e7a",
    width: 16,
    height: 16,
    marginRight: 6
  },
  content: {
    padding: 0
  },
  button: {
    maxWidth: "80px",
    maxHeight: "40px",
    minWidth: "75px",
    minHeight: "35px",
    borderRadius: 30,
    backgroundColor: "#D5E7F2",
    fontSize: 12,
    margin: 10,

  }
});

export default function Post(props) {

    const classes = useStyles();
    //get post 
    const [state] = useAsync(() => api.getPost(props.id), [props.id]);
    const { loading, data: data, error } = state; 

    //get comment list 
    const [state_comment] = useAsync(() => api.getComments(props.id), [props.id]);
    const { loading_comment, data: data_comment, error_comment } = state_comment; 

    //post info state
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!data) return null;
    console.log(data);

    //comment list info 
    if (loading_comment) return <div>로딩중..</div>;
    if (error_comment) return <div>에러가 발생했습니다</div>;
    if (!data_comment) return null;
    console.log(data_comment.length);
    
    const date = (
        <span className={classes.postDateBlock}>
        <ScheduleIcon className={classes.dateIcon} />
        {data.writeDate}
        </span>
    );
    const author = (
        <div className={classes.postAuthorBlock}>
        <PersonIcon className={classes.dateIcon} />
        {data.writerName}
        </div>
    );

    const options = (
        <div className={classes.postOptions}>
        <IconButton aria-label="share">
            <DeleteIcon />
        </IconButton>
        </div>
    );

    let helpful = data.helpfulNum
    console.log(data.id)

    const Helpnum = (event) => {
      helpful = helpful + 1
      console.log(helpful)
    };

    //delay
   const delay = ms => new Promise(res => setTimeout(res, ms));

    const Delete = async () => {
      api.Delete(data.id);
      await delay(1000)
      window.location.href=`/`
    };

    console.log(helpful)

    return (
        <Container className={classes.root}>
        <div className={classes.postTitle}>
            <Grid container alignItems="center">
            <Grid item xs>
                <Typography gutterBottom variant="h4">
                    {data.title} 
                </Typography>
            </Grid>
            </Grid>
            <Grid container alignItems="center">
            <Grid item xs>
                <Typography component="span" color="textSecondary">
                    {/* {data.category.map((tag, i) => (
                    <Chip
                        key={i}
                        label={tag}
                        component="a"
                        clickable
                        className={classes.postTag}
                    />
                    ))} */}
                </Typography>
            </Grid>
            <Grid justify='evenly' item xs={1} >
                <Typography className={classes.postAuthor}>
                {author}
                {date}
                </Typography>
            </Grid>
            </Grid>
        </div>
        <Divider variant="middle" />

        <CardContent>
            <Typography variant="body2" component="p" className={classes.postText}>
            {parse(data.content)}
          
            </Typography>
        </CardContent>

        
        <Grid container alignItems="center">
            <Grid item xs>
                <Typography component="span" className={classes.postCommentNum}>
                    댓글수 : {data_comment.length}
                </Typography>
            </Grid>
            <Grid justify='evenly' item xs={4}>
                <CardActions disableSpacing>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="inherit"
                        onClick={Helpnum} 
                        >
                        고마워요
                    </Button>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="inherit"
                        >
                        스크랩
                    </Button>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="inherit"
                        onClick={Delete} 
                        >
                        삭제
                    </Button>
                </CardActions>
            </Grid>
            </Grid>

        <CardContent className={classes.content}>
            <Divider />
            {data_comment.map((comment, i) => (
            <div key={comment.id}>
                <Divider />
                <Comment comment={comment} />
            </div>
            ))}
            <SendComment id={props.id}></SendComment>
        </CardContent>
        </Container>
    );
}
