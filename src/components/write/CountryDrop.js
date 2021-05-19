import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  contain: {
    marginTop: '20px',
    marginLeft: '120px',
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className={classes.contain}>
        <b>나라선택</b><br /><br />
      <FormControl variant="outlined" required  className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">나라</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          onChange={handleChange}
          label="country"
        >
          <MenuItem value="">
            <em>나라</em>
          </MenuItem>
          <MenuItem value={10}>미국</MenuItem>
          <MenuItem value={20}>폴란드</MenuItem>
          <MenuItem value={30}>일본</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
