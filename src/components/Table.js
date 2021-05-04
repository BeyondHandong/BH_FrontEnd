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

function createData(att, name, writer, data, views, like) {
  return { att, name, writer, data, views, like };
}

const rows = [
  createData('공지','사이트 규칙', '게시판지기', '2019.05.04', 2400, 420),
  createData('FAQ','비자 관련 내용', 'OIA', '2019.05.04', 370, 43),
  createData('FAQ','교환가능한 학교들', 'OIA', '2019.05.04', 240, 60),
  createData('5','호주 비자 신청 알아야 할 점', '남진우학부생', '2021.05.06', 670, 23),
  createData('4','호주 숙소 구하는 법', '남진우', '2021.05.04', 490, 39),
  createData('3','폴란드 포즈난 지리', '서주현학부생', '2020.07.04', 490, 3),
  createData('2','포즈난 맛집', '조나단', '2019.05.04', 190, 4),
  createData('1','한동대학교 교환학생', '수빈', '2019.05.04', 59, 9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
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
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.att}</StyledTableCell>
              <StyledTableCell align="center" component="th" scope="row">
                <a href="#">{row.name}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.writer}</StyledTableCell>
              <StyledTableCell align="right">{row.data}</StyledTableCell>
              <StyledTableCell align="right">{row.views}{'  '}<VisibilityIcon /></StyledTableCell>
              <StyledTableCell align="right">{row.like}{'  '}<FavoriteIcon /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
