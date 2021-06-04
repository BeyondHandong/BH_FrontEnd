import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {FormatBold } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';

import useAsync from '../api/useAsync';
import * as api from '../api/post';

import { BrowserRouter as Router } from "react-router-dom";
import { useCheckState, useSearch, useCountry } from '../Context';
import TablePagination from '@material-ui/core/TablePagination';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#D5E7F2',
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 17,
    fontStyle: FormatBold,
    backgroundColor : "white",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.action.hover,
  },
}))(TableRow);

const StyledTableContainer = withStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: "1000px",
        align: "center",
        marginTop: theme.spacing(5),
        marginLeft: "auto",
        marginRight: "auto"
    },
  }))(TableContainer);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  page: {
    padding: '2px 4px',
    
    maxWidth: "400px",
    maxHeight: "45px",
    minWidth: "100px",
    minHeight: "30px",
    marginLeft: "auto",
    marginRight: "auto",
    align: "center",
    //borderRadius: 30,
    
  },
});


export default function CustomizedTables(props) {
  const classes = useStyles();

  const checks = useCheckState();
  const checks1 = useSearch();
  const checks2 = useCountry();
  
  let init_search = ""
  let country_state = "&countries="
  let search_state = `&search=`
  let button_state = "?category="
  let all_check = 1

  if(checks2 == "All"){
    country_state = ""
  }else{
    country_state = `&countries=${checks2}`
  }

  if (checks1 == "null"){
    search_state = ""
  } else{
    init_search = checks1
    search_state = `&search=${init_search}`
  }

  if (checks[0].isCheck === true){
    button_state = button_state + checks[0].category + ",";
  }else {
    all_check = 0;
  }
  
  if (checks[1].isCheck === true){
    button_state = button_state + checks[1].category + ",";
  }else {
    all_check = 0;
  }

  if (checks[2].isCheck === true){
    button_state = button_state + checks[2].category + ",";
  }else {
    all_check = 0;
  }

  if (checks[3].isCheck === true){
    button_state = button_state + checks[3].category + ",";
  }else {
    all_check = 0;
  }

  if (all_check === 1){
    button_state = ""
    search_state = `?search=${init_search}`
  } else{

  }

  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dense, setDense] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
  
  //console.log(search_state)  


  const [state] = useAsync(() => api.getPosts(props.type, button_state, search_state, country_state), [props.type, button_state, search_state, country_state]);
  
  const { loading, data: rows, error } = state;
  
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!rows) return null;

  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <Router>
    <StyledTableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right"> </StyledTableCell>
            <StyledTableCell align="center">제목</StyledTableCell>
            <StyledTableCell align="right">작성자</StyledTableCell>
            <StyledTableCell align="center">날짜</StyledTableCell>
            <StyledTableCell align="right">조회수</StyledTableCell>
            <StyledTableCell align="right">고마워요</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
            <StyledTableRow 
              onClick={event =>  window.location.href=`detail?id=${row.id}`}
              key={row.id}>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="center" component="th" scope="row">
                <a >{row.title}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.writerName}</StyledTableCell>
              <StyledTableCell align="right">{row.writeDate}</StyledTableCell>
              <StyledTableCell align="right">{row.viewNum}{'  '}<VisibilityIcon /></StyledTableCell>
              <StyledTableCell align="right">{row.helpfulNum}{'  '}<FavoriteIcon /></StyledTableCell>
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
        </TableBody>
      </Table>
    </StyledTableContainer>
    <TablePagination
          className={classes.page}
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Router>
  );
}
