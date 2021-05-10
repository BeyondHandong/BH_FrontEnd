import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Container from "@material-ui/core/Container";

import { useCheckState, useCheckDispatch } from '../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  checkStyle: {
    marginRight: theme.spacing(20),
  }
}));

const BlueCheckbox = withStyles({
  root: {
    color: "#5A98BF",
    "&$checked": {
      color: "#5A98BF"
    },
    transform: "scale(1.3)"
  },
  checked: {}
})((props) => (
  <Checkbox
    icon={<CircleUnchecked />}
    checkedIcon={<CircleCheckedFilled />}
    color="default"
    {...props}
  />
));


export default function CheckboxLabels() {
  const classes = useStyles();

  const checks = useCheckState();
  
  return (
    <React.Fragment>
      <Container spacing={4} component="main" className={classes.root}>
        <FormGroup row component="main">
          
        {checks.map(check => (
            <FormControlLabel
            key={check.id}
            className={classes.checkStyle}
            control={
              <CheckBoxItem
              id={check.id}
              isCheck={check.isCheck}
            
              />
            }
            label={check.text}
          />
        ))}
        </FormGroup>
      </Container>
    </React.Fragment>
  );
}

function CheckBoxItem({ id, isCheck }) {
  const dispatch = useCheckDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  return (
    <BlueCheckbox
      checked={isCheck}
      onChange={onToggle}
    />
  );
}
