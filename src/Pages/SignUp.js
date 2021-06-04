import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as api from '../api/post';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      Beyond Handong
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [state, setState] = useState(0); //0 정상적인 상황, 1 이메일이 중복된 상황 

  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    window.location.href=`signup`;
    setState(0)
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  //이름
  const [name, setName] = React.useState('');
  const handleName= (e) => {
    console.log(e.target.value);
    setName(e.target.value);		//이벤트 발생한 value값으로 {text} 변경
  };

  //패스워드
  const [pw, setPw] = React.useState('');
  const handlePw = (e) => {
    console.log(e.target.value);
    setPw(e.target.value);		//이벤트 발생한 value값으로 {text} 변경
  };

  //패스워드
  const [cpw, setCPw] = React.useState('');
  const handleCPw = (e) => {
    console.log(e.target.value);
    setCPw(e.target.value);		//이벤트 발생한 value값으로 {text} 변경
  };

  //studentId
  const [studentId, setStudentId] = React.useState('');
  const handleStudentId= (e) => {
    console.log(e.target.value);
    setStudentId(e.target.value);		//이벤트 발생한 value값으로 {text} 변경
  };

  //이메일
  const [email, setEmail] = React.useState('');
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);		//이벤트 발생한 value값으로 {text} 변경
  };

   //delay
   const delay = ms => new Promise(res => setTimeout(res, ms));

  //서버 전달 
  const handleSubmit = async () => {

    var data = new Object(); 
    data.name = name;
    data.email = email;
    data.studentId = studentId
    data.password = pw;
    var jsonData = JSON.stringify(data);
    const response = await axios.post(
      '/user/signup', data,
    {headers: {
      Authorization: ``,
      'Content-Type': 'application/json'
    }}
    )
    .catch(function (error) {
      console.log("signUp error");
      console.log(error)
    });
    console.log(data);
    // response.data
    console.log(response.data);
    if(response.data == 'The email is already existed!'){
      setState(1)
    }
    else if(response.data == 'redirect:/')
      window.location.href=`signin`;
  };
  if (state == 0){
    return (
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    value={name} 
                    onChange={handleName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={pw}  
                    onChange={handlePw}
                  />
                </Grid>
                {/*<Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password_confirm"
                    label="Password Confirm"
                    type="password_confirm"
                    id="password_confirm"
                    autoComplete="current-password"
                    value={cpw}  
                    onChange={handleCPw}
                  />
                </Grid>*/}
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="StudentID"
                    label="StudentID"
                    type="studentid"
                    id="studentid"
                    value={studentId}  
                    onChange={handleStudentId}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}  
                    onChange={handleEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
    );
  }else{{/*>*/}
    return(
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}> <h1>This email already exists!<br/>Please use another email!</h1></Backdrop>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    value={name} 
                    onChange={handleName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={pw}  
                    onChange={handlePw}
                  />
                </Grid>
                {/*<Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password_confirm"
                    label="Password Confirm"
                    type="password_confirm"
                    id="password_confirm"
                    autoComplete="current-password"
                    value={cpw}  
                    onChange={handleCPw}
                  />
                </Grid>*/}
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="StudentID"
                    label="StudentID"
                    type="studentid"
                    id="studentid"
                    value={studentId}  
                    onChange={handleStudentId}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}  
                    onChange={handleEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
    )
  }
}