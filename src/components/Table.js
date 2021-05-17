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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#D5E7F2',
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 17,
    fontStyle: FormatBold,
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
});


export default function CustomizedTables(props) {
  const classes = useStyles();

  const [state] = useAsync(() => api.getPosts(props.type), [props.type]);

  const { loading, data: rows, error } = state; 

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!rows) return null;



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
          {rows.map((row) => (
            <StyledTableRow 
              onClick={event =>  window.location.href=`post/detail?id=${row.id}`}
              key={row.id}>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="center" component="th" scope="row">
                <a >{row.title}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.writerName}</StyledTableCell>
              <StyledTableCell align="right">{row.writeDate}</StyledTableCell>
              <StyledTableCell align="right">{row.scrapNum}{'  '}<VisibilityIcon /></StyledTableCell>
              <StyledTableCell align="right">{row.helpfulNum}{'  '}<FavoriteIcon /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </StyledTableContainer>
    </Router>
  );
}
