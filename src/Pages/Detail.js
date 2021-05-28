import React, {Fragment} from 'react';
import OnlyTopBar from '../components/OnlyTopBar'
import {makeStyles } from "@material-ui/core/styles";
import Content from "../components/detail/Content";
import { Parallax } from 'react-parallax';


const useStyles = makeStyles((theme) => ({
  contentarea: {
    align: "center",
    marginTop: theme.spacing(5),
    marginLeft: "auto",
    marginRight: "auto",
    border: '0px solid rgba(0, 0, 0, 0)',
  },
  parallax: {
    height: '100%',
    flex: 1,
    minHeight: "1000px",
  }
}));


export default function Detail(props) {
    const classes = useStyles();

    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id'); 
    console.log(IdFromURL);

    return (
      <Parallax className={classes.parallax} blur={0} bgImage="https://static.wixstatic.com/media/11062b_7d8badf22ed9415e8c2974ee130d4943~mv2.jpg" bgImageAlt="santorini" strength={200}>
        <Fragment>
        <OnlyTopBar></OnlyTopBar>
            <div className={classes.contentarea}>
                <Content id={IdFromURL}></Content>
            </div>

        </Fragment>
      </Parallax>
    );
}

    