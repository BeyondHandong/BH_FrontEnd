import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from "@material-ui/icons/AccountCircle"

import MainTitle from './MainTitle'
import Main from './Main'


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

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

// tab
function LinkTab(props) {
  return (
    <Box
      marginRight={5}>
    <Tab
      style={{fontSize: 20}}
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
    </Box>
  );
}

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
        <Toolbar component="span" className={classes.toolbar}>
          <Typography noWrap className={classes.title}>
            Beyond Handong
          </Typography>
       
          <Tabs
            component="main"
            value={value}
            TabIndicatorProps={{style: {background:'#5A98BF', height:"3px",}}}
            onChange={handleChange}
            aria-label="nav tabs"
            className={classes.tabs}>
            <LinkTab label="정보 게시판" href="/drafts" {...a11yProps(0)} /> 
            {/* 여기서 정보 받아오는 api함수를 쓰면 될 것 같다 
            참고 : https://codesandbox.io/s/api-integrate-c3rli?fontsize=14&file=/src/useAsync.js
            https://github.com/reactions2code/react-project-api
            */}
            <LinkTab label="자유 게시판" href="/trash" {...a11yProps(1)} />
          </Tabs>


          <Typography component="span" className={classes.font}>
                남진우
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                edge = "end"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}

        </Toolbar>
      </AppBar>
      
      
      <TabPanel value={value} index={0}>
        <MainTitle title="정보게시판"></MainTitle>
        <Main title="정보게시판" type="info"></Main>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <MainTitle title="자유게시판"></MainTitle>
        <Main title="자유게시판" type="free"></Main>
      </TabPanel>
    </div>
  );
}
