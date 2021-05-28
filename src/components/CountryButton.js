import React,{useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  Button: {
    padding: 10,
    color: "#D5E7F2",
      // paddingLeft: theme.spacing(3),
    maxWidth: "550px",
    maxHeight: "45px",
    minWidth: "100px",
    minHeight: "30px",
      align: "centerLeft",
    borderRadius: 30,
      backgroundColor: "#5A98BF",
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function CountryCollapsibleButton({ children, ...props}){
    const classes = useStyles();
    const {title, collapse} = props;
    const [isCollapse, setIsCollapse] = useState(collapse);
    const [icon, setIcon] = useState("fa fa-chevron-down");
    const animate = collapse => {
    setIsCollapse(!collapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };
  useEffect(() => {
    animate(!collapse);
  }, [collapse]);
    return (
        <div className="coll-panel">
            <button
                type="button"
                // className="coll-panel-btn btn-primary btn-block text-left"
                className={classes.Button}
                onClick={() => animate()}
            >
                <i className={icon} /> {title}
            </button>
            <Collapse className="border text-left p-2" isOpen={isCollapse}>
                {children}
            </Collapse>
        </div>
    );
}
CountryCollapsibleButton.defaultProps = {
    /*children: {
        first: "미국",
        second: "폴란드",
        third: "일본",
    },*/
    // TODO: 어떻게 하는지 답 찾기
    title: "나라선택",
    collapse: true
};

export default CountryCollapsibleButton;