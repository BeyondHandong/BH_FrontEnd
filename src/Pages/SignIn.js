import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleLogin from '../components/GoogleLogin'
import * as api from '../api/post';
import {useUserDispatch} from '../Context'
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';

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
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 's#9AC1D9',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#262626',
      },
      '&:hover fieldset': {
        borderColor: '#262626',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#9AC1D9',
      },
    },
  },
})(TextField);

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#9AC1D9'
  },
  font: {
    color: '#262626',

  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [state, setState] = useState(0); //0 정상적인 상황, 1 로그인 정보가 잘 못된 상황

  const [open, setOpen] = useState(true);

  const Close = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  //아이디
  const [email, setId] = React.useState('');
  const handleEmail= (e) => {
    console.log(e.target.value);
    setId(e.target.value);		//이벤트 발생한 value값으로 {text} 변경
  };

  //패스워드
  const [pw, setPw] = React.useState('');
  const handlePw = (e) => {
    console.log(e.target.value);
    setPw(e.target.value);		//이벤트 발생한 value값으로 {text} 변경
  };

  //delay
  const delay = ms => new Promise(res => setTimeout(res, ms));

  //서버 전달 
  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = new Object(); 
    data.email = email;
    data.password = pw;
    var jsonData = JSON.stringify(data);

    //server connection
    const response = await axios.post(
      '/user/signin', jsonData,
    {headers: {
      Authorization: ``,
      'Content-Type': 'application/json'
    }}
    )
    .catch(function (error) {
      console.log("signUp error");
      console.log(error)
    }).then(res => { 
      console.log(res.data);
      //get user info 
      if(res.data.id < 0){
        setState(1)
        //await delay(1000)
        window.location.href=`signin`
      }
      else {
        console.log(res.data.id);
        window.localStorage.setItem('user', res.data.id);
        window.localStorage.setItem('name', res.data.name);
        window.localStorage.setItem('authKey', res.data.authKey);
        // window.localStorage.getItem('authKey');
      }
    });
    await delay(2000);
    window.location.href=`/`;
  };

  
  if (state == 0){
    return (
        <Container component="main" maxWidth="xs"> 
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email} 
              onChange={handleEmail}
            />
            <CssTextField
              variant="outlined"
              margin="normal"
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
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                <Link className={classes.font}  href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
            <GoogleLogin />
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }else{
    return(
      <Container component="main" maxWidth="xs"> 
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Backdrop className={classes.backdrop} open={open} onClick={Close}><h1><br /><br />Wrong ID or PW!</h1></Backdrop>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email} 
              onChange={handleEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
            <GoogleLogin />
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
  }
}