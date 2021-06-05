import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Search from './Search';
import { useCountryDispatch } from '../Context';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: -3,
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "row",
  },
  search: {
    minWidth: 630,
  },
  
}));

export default function GroupedSelect(props) {
  const classes = useStyles();

  const dispatch = useCountryDispatch();
  
  
  
  

  const [country,setCountry] = useState("All")
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  dispatch({ type: 'Select', country });
  

  return (
    <div className={classes.main}>
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">나라선택</InputLabel>
        <Select defaultValue="" id="grouped-select"
        value={country}
        onChange={handleChange}
        >
          <MenuItem value={"All"}>전체</MenuItem>
          <MenuItem value={"미국"}>미국</MenuItem>
          <MenuItem value={"캐나다"}>캐나다</MenuItem>
          <MenuItem value={"영국"}>영국</MenuItem>
          <MenuItem value={"폴란드"}>폴란드</MenuItem>
          <MenuItem value={"일본"}>일본</MenuItem>
          <MenuItem value={"싱가포르"}>싱가포르</MenuItem>
          <MenuItem value={"호주"}>호주</MenuItem>
          <MenuItem value={"뉴질랜드"}>뉴질랜드</MenuItem>
          <MenuItem value={"기타"}>기타</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className={classes.search}>
        <Search type={props.type}></Search>
      </div>
    </div>
  );
}
