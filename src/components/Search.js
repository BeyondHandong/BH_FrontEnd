import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useSearchDispatch } from '../Context';

const useStyles = makeStyles((theme) => ({
  containerAlignment:{
    flex: 1,
    flexDirection: 'row',
  },
  form: {
    padding: '2px 4px',
    display: 'flex',
    maxWidth: "600px",
    maxHeight: "45px",
    minWidth: "100px",
    minHeight: "30px",
    backgroundColor: "#f0f3f5",
    align: "center",
    borderRadius: 30,
    
  },
  input: {
    flex: 2,
    paddingLeft: theme.spacing(3),
    maxWidth: "550px",
    maxHeight: "45px",
    minWidth: "100px",
    minHeight: "30px",
    borderRadius: 30,
    backgroundColor: "#f0f3f5"
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

 

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const dispatch = useSearchDispatch();
  let initiate = "null"

  const search = (e) => {
    e.preventDefault();
    if (input == ""){
      dispatch({ type: 'NewKey', initiate });
    }else{
      dispatch({ type: 'NotNewKey', input });
    }
  };
  
  return ( 
    <div align="center" className={classes.containerAlignment}>
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
