import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { connect } from "react-redux";
import {
  updateSelected,
  updateSelected2,
  updateDrawer,
  updateLayer,
  clearData,
  updateNeighborhood,
} from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    position: "fixed",
    top: 80,
    left: 55,
    borderRadius: 0,
  },
  toggleButton: {
    "&$selected": {
      backgroundColor: "#003c50",
      color: "white",
      "&:hover": {
        backgroundColor: "#1e647b",
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "#1e647b",
      color: "white",
    },
  },
  selected: {},
  selectedID: {
    width: "300px",
  },
}));

function SketchWidgetPaper(props) {
  const classes = useStyles();
  const [selection, setSelection] = useState("tracts");

  useEffect(() => {
    const { survey } = props.mapState;
    if (survey === "ACS") setSelection("tracts");
    else if (survey === "2020") setSelection("blockgroups");
  }, [props.mapState.survey]);

  const handleToggle = (event, newSelection) => {
    console.log(newSelection);
    setSelection(newSelection);
    props.dispatch(updateLayer(newSelection));
    handleClear();
  };

  let handleClear = () => {
    props.mapState.view.graphics.removeAll();
    props.mapState.view.popup.close();
    props.mapState.view.popup.clear();
    props.dispatch(updateSelected([]));
    props.dispatch(updateSelected2([]));
    props.dispatch(clearData());
    props.dispatch(updateNeighborhood());
  };

  let handleGetCensus = () => {
    props.dispatch(updateDrawer(true));
  };

  return (
    <div>
      <Paper className={classes.root}>
        <ToggleButtonGroup
          value={selection}
          exclusive
          onChange={handleToggle}
          aria-label="layer selection"
          size="small"
          data-testid="toggleBtn"
        >
          {props.mapState.survey === "ACS" ? (
            <ToggleButton
              classes={{
                root: classes.toggleButton,
                selected: classes.selected,
              }}
              value="tracts"
              aria-label="left aligned"
            >
              tract
            </ToggleButton>
          ) : (
            <ToggleButton
              classes={{
                root: classes.toggleButton,
                selected: classes.selected,
              }}
              value="blockgroups"
              aria-label="left aligned"
            >
              block group
            </ToggleButton>
          )}
          <ToggleButton
            classes={{ root: classes.toggleButton, selected: classes.selected }}
            value="neighborhood"
            aria-label="centered"
          >
            neighborhood
          </ToggleButton>
          <ToggleButton
            classes={{ root: classes.toggleButton, selected: classes.selected }}
            value="city"
            aria-label="right aligned"
          >
            city
          </ToggleButton>
        </ToggleButtonGroup>
        <br />
        <br />

        {props.mapState.layer == "neighborhood" ? (
          <Typography component="p">
            Selected Neighborhood: {props.mapState.neighborhood}
          </Typography>
        ) : (
          ""
        )}
        {props.mapState.layer == "blockgroups" ? (
          <Typography component="p" className={classes.selectedID}>
            Selected Block Groups:{" "}
            {props.mapState.selected && props.mapState.selected.length
              ? props.mapState.selected.join(", ")
              : ""}
          </Typography>
        ) : (
          ""
        )}
        {props.mapState.layer == "tracts" ? (
          <Typography component="p" className={classes.selectedID}>
            Selected Tracts:{" "}
            {props.mapState.selected2 && props.mapState.selected2.length
              ? props.mapState.selected2.join(", ")
              : ""}
          </Typography>
        ) : (
          ""
        )}
        {props.mapState.layer == "city" ? (
          <Typography component="p">Citywide</Typography>
        ) : (
          ""
        )}
        <br />
        <Grid item xs={12} md={12}>
          <Grid container spacing={1} direction="column" alignItems="center">
            <Grid item>
              {(props.mapState.selected &&
                props.mapState.selected.length != 0) ||
              props.mapState.layer === "city" ||
              props.mapState.neighborhood ? (
                <Button
                  onClick={handleGetCensus}
                  variant={"contained"}
                  color="primary"
                >
                  View Selected
                </Button>
              ) : (
                <Button disabled>View Selected</Button>
              )}
              <Button
                variant="outlined"
                onClick={handleClear}
                style={{ marginLeft: 10 }}
              >
                Clear Selection
              </Button>
              <div>
                <br />
              </div>
              <Typography component="p">
                Source: U.S. Census Bureau, <br />
                {props.mapState.survey === "ACS"
                  ? "2017 - 2021 American Community Survey (ACS)"
                  : "2020 Decennial Census (Redistricting Data)"}
              </Typography>
              {props.mapState.layer === "neighborhood" ? (
                props.mapState.survey === "ACS" ? (
                  <Typography component="p">
                    Note: Neighborhood boundaries are approximated by
                    <br /> census tracts.
                  </Typography>
                ) : (
                  <Typography component="p">
                    Note: Neighborhood boundaries are approximated by
                    <br /> census block groups.
                  </Typography>
                )
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  mapState: state.map,
  generalState: state.general,
});

export default connect(mapStateToProps)(SketchWidgetPaper);
