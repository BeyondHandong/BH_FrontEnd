import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from "@material-ui/icons/AccountCircle"
import { BrowserRouter as Router } from "react-router-dom";
import Logo from './Logo'


// page 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


// css
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#262626',
  },
  appBar: {
    borderBottom: `1px solid #262626`,
    backgroundColor: '#D5E7F2',
  },
  toolbar: {
    flexWrap: 'wrap',
    alignitems: 'space-between',
    justifyContent: 'center',
  },
  title: {
    flexGrow: 1,
    fontSize: 30,
    color: "#262626"
  },
  tabs: {
    justifyContent: 'center',
    flexGrow: 1.5,
    align: "center",
    fontSize: 20,
  },
  font: {
    fontSize: 15,
  },

}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
        <Toolbar component="span" className={classes.toolbar}>
        <Router>
          <Typography button noWrap 
            className={classes.title} 
            onClick={event =>  window.location.href=`/`}>
            Beyond Handong
            <Logo></Logo>
          </Typography>
          </Router>

          <Typography component="span" className={classes.font}>
            {window.localStorage.getItem("name")}
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={event =>  window.location.href=`profile`}
                color="inherit"
                edge = "end"
              >
                <AccountCircle />
              </IconButton>
            
            </div>
          )}

        </Toolbar>
      </AppBar>
    </div>
  );
}
