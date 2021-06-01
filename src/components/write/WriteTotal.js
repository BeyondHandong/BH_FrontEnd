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
import {convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DraftToHtml from "draftjs-to-html";
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import * as api from '../../api/post';
import { BrowserRouter as Router } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

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
  const [error, setError] = React.useState(false);
  //제목
  const [text, setText] = React.useState('');
  const handleText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);		//이벤트 발생한 value값으로 {text} 변경
  };

  //카테고리 
  const [value_category, setCategoryValue] = React.useState('');
  const handleCategoryRadioChange = (event) => {
    console.log(event.target.value);
    setCategoryValue(event.target.value);
    setError(false);
  };
  //게시판
  const [value_type, setTypeValue] = React.useState('');
  const handleTypeRadioChange = (event) => {
    console.log(event.target.value);
    setTypeValue(event.target.value);
    setError(false);
  };

  //나라 
  const [country, setCountry] = React.useState('')
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  //컨텐츠 
  const [editorState, setEditorState] = React.useState(
    MUIEditorState.createEmpty()
  );
  const onChange = (newState) => {
    setEditorState(newState);
  };

  //delay
  const delay = ms => new Promise(res => setTimeout(res, ms));

  //최종 전달 
  const handleSubmit = async () => {

    {DraftToHtml(convertToRaw(editorState.getCurrentContent()))}

    var data = new Object(); 
    data.writerId = 1;
    data.writerName = "남진우";
    data.type = "일반";
    data.title = text;
    data.content = DraftToHtml(convertToRaw(editorState.getCurrentContent()));
    data.country = country;
    data.category = value_category;
    data.sector = value_type;
    var jsonData = JSON.stringify(data);
    api.sendPost(jsonData, [jsonData]);
    console.log(jsonData);
    await delay(3000);
    window.location.href=`/`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="제목을 입력하세요"
          margin="normal"
          onChange={handleText}
          value={text}  
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

      <div> 
        <MUIEditor 
            editorState={editorState} 
            onChange={onChange}
            /> 
      </div>
  
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
          value="교환"
          control={<CustomizedRadio color="primary" />}
          label="교환학생"
        />
        <FormControlLabel
          value="대학원"
          control={<CustomizedRadio color="primary" />}
          label="해외대학원"
          // labelPlacement="start"
        />
        <FormControlLabel
          value="취업"
          control={<CustomizedRadio color="primary" />}
          label="해외취업"
          // labelPlacement="bottom"
        />
        <FormControlLabel
          value="워킹"
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
      <Router>
        <Button
              className={classes.newButton}
              variant="contained"
              color="inherit"
              endIcon={<CreateIcon />}
              onClick={handleSubmit}
              // onClick={event =>  window.location.href=`/`}
              onSubmit={handleSubmit}
            >
              등록하기
        </Button>
      </Router>
    </form >
  );
}
