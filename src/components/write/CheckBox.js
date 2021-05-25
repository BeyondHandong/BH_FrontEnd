import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextArea from './TextArea';

const CustomizedRadio = withStyles({
  root: {
    "&$checked": {
      color: "#5A98BF"
    }
  },
  checked: {}
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    borderBottom: `1.5px solid #262626`,
    display: "flex",
    justifyContent: "space-between",
  },
  newButton: {
    maxWidth: "300px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: 30,
    backgroundColor: "#D5E7F2",
    float: "right",
    marginRight: '120px',
    marginBottom: '20px',
  },
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

export default function FormControlLabelPlacement() {
  const classes = useStyles();
  const [value_category, setCategoryValue] = React.useState("");
  const [value_type, setTypeValue] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleCategoryRadioChange = (event) => {
    setCategoryValue(event.target.value_category);
    setError(false);
  };
  const handleTypeRadioChange = (event) => {
    setTypeValue(event.target.value_type);
    setError(false);
  };

  const [country, setCountry] = React.useState('')
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //서버에 정보 보내기
    if (value_category === "best") {
      setError(false);
    } else if (value_type === "worst") {
      setError(true);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
  
      <FormLabel component="legend">게시판 타입 선택</FormLabel>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="top"
        onChange={handleTypeRadioChange}
      >
        <FormControlLabel
          value="정보"
          control={<CustomizedRadio color="primary" />}
          label="정보게시판"
        />
        <FormControlLabel
          value="자유"
          control={<CustomizedRadio color="primary" />}
          label="자유게시판"
          // labelPlacement="start"
        />
      </RadioGroup>
      
      <br />
      <FormLabel component="legend">게시판 카테고리 선택</FormLabel>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="top"
        onChange={handleCategoryRadioChange}
      >
        <FormControlLabel
          value="교환학생"
          control={<CustomizedRadio color="primary" />}
          label="교환학생"
        />
        <FormControlLabel
          value="해외대학원"
          control={<CustomizedRadio color="primary" />}
          label="해외대학원"
          // labelPlacement="start"
        />
        <FormControlLabel
          value="해외취업"
          control={<CustomizedRadio color="primary" />}
          label="해외취업"
          // labelPlacement="bottom"
        />
        <FormControlLabel
          value="워킹홀리데이"
          control={<CustomizedRadio color="primary" />}
          label="워킹홀리데이"
        />
      </RadioGroup>
      <br />
      <FormLabel component="legend">나라선택</FormLabel>
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
      
      <React.Fragment>
        <br />
          <Button
            className={classes.newButton}
            variant="contained"
            color="inherit"
            endIcon={<CreateIcon />}
            onSubmit={handleSubmit}
          >
            등록하기
          </Button>
      </React.Fragment>
    </form>
  );
}
