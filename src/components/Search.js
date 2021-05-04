import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  form: {
    padding: '2px 4px',
    display: 'flex',
    maxWidth: "600px",
    maxHeight: "45px",
    minWidth: "100px",
    minHeight: "30px",
    backgroundColor: "#D5E7F2",
    align: "center",
    borderRadius: 30,
    
  },
  input: {
    flex: 1,
    paddingLeft: theme.spacing(3),
    maxWidth: "550px",
    maxHeight: "45px",
    minWidth: "100px",
    minHeight: "30px",
    borderRadius: 30,
    backgroundColor: "#D5E7F2"
  },
  iconButton: {
    padding: 10,
    color: "#5A98BF"
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

 

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log("buttom clicked", input);
    // search logic 구현 
  };

  return ( 
    <div align="center">
      <Paper component="form" className={classes.form}>
        <InputBase
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className={classes.input}
          placeholder="Search "
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton 
          onClick={search} 
          type="submit" 
          className={classes.iconButton} 
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>

  );
}
