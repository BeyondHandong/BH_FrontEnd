import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  check: {
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
  const [state, setState] = React.useState({
    isExchanged: true,
    isGraduated: true,
    isJob: true,
    isWarhol: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Container spacing={4} component="main" className={classes.root}>
        <FormGroup row component="main">
          <FormControlLabel
            className={classes.check}
            control={
              <BlueCheckbox
                checked={state.isExchanged}
                onChange={handleChange}
                name="isExchanged"
              />
            }
            label="교환학생"
          />
          <FormControlLabel
            className={classes.check}
            control={
              <BlueCheckbox
                checked={state.isGraduated}
                onChange={handleChange}
                name="isGraduated"
              />
            }
            label="해외대학원"
          />
          <FormControlLabel
            className={classes.check}
            control={
              <BlueCheckbox
                checked={state.isJob}
                onChange={handleChange}
                name="isJob"
              />
            }
            label="해외취업"
          />
          <FormControlLabel
            control={
              <BlueCheckbox
                checked={state.isWarhol}
                onChange={handleChange}
                name="isWarhol"
              />
            }
            label="워킹홀리데이"
          />
        </FormGroup>
      </Container>
    </React.Fragment>
  );
}
