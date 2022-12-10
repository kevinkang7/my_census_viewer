import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useDispatch } from "react-redux";
import { updateDrawer, changeCategory, openInfo } from "../../redux/actions";
import logo from "../../images/BPDAlogo_sm.jpg";
import LoadingBar from "../public/LoadingBar";
import { Link } from "react-router-dom";
import Search from "../public/Search";
import SearchTract from "../public/SearchTract";

//const drawerWidth = 360;

const color = {
  main: "#003c50",
  second: "#2A5C6D",
  third: "#557D8A",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  // appBar: {
  //   marginLeft: drawerWidth,
  //   [theme.breakpoints.up("sm")]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //   },
  // },

  toolbar: {
    backgroundColor: color.main,
    display: "flex",
    justifyContent: "center",
  },

  searchBar: {
    display: "flex",
    justifyContent: "space-between",
  },

  title: {
    fontSize: "1.0rem",
  },
  menuButton: {
    padding: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    color: "white",
  },
  sectionDesktop: {
    fontSize: "1rem",
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  category: {
    color: "white",
    fontSize: "0.8rem",
    float: "right",
    textDecoration: "none",
  },
  active: {
    color: "white",
  },

  logo: {
    width: "2.5rem",
    height: "2.5rem",
    marginRight: "5px",
  },
  credit: {
    // marginLeft: '4px',
    fontSize: "0.8rem",
    [theme.breakpoints.down("lg")]: {
      // float: 'left',
    },
  },
  split: {
    height: "1.6rem",
    border: "1px solid",
    marginLeft: "0.8rem",
    marginRight: "0.8rem",
    position: "relative",
    top: "0.4rem",
  },
}));

function Appbar1(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleChange = (event, newValue) => {
    let indexArr = ["population", "education", "income", "housing", "labor"];
    dispatch(changeCategory(indexArr[newValue]));
    handleOpen();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleOpen = () => {
    props.dispatch(updateDrawer(true));
  };

  const handleInfo = () => {
    props.dispatch(openInfo(true));
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => handleChange(null, 0)}>
        <p>Population</p>
      </MenuItem>
      <MenuItem onClick={() => handleChange(null, 1)}>
        <p>Education</p>
      </MenuItem>
      <MenuItem onClick={() => handleChange(null, 2)}>
        <p>Income</p>
      </MenuItem>
      <MenuItem onClick={() => handleChange(null, 3)}>
        <p>Housing</p>
      </MenuItem>
      <MenuItem onClick={() => handleChange(null, 4)}>
        <p>Labor Force</p>
      </MenuItem>
    </Menu>
  );
  //Mar22,2022 update:  <AppBar position='static'> affect map loading location
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <CardMedia className={classes.logo} image={logo} />
          <div className={classes.title}>
            American Community Survey Viewer
            <div className={classes.credit}>
              Developed by BPDA Research & GIS
            </div>
          </div>
          <div className={classes.grow} />
          <SearchTract
            className={classes.searchBar}
            setLoading={(loading) => setLoading(loading)}
          />
          <div className={classes.grow} />
          <div className={classes.sectionMobile}>
            <Link to="/">
              <Button className={classes.category}>Home</Button>
            </Link>
            <Button className={classes.category} onClick={handleInfo}>
              About
            </Button>
            <IconButton
              aria-label="add"
              color="secondary"
              className={classes.menuButton}
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <div className={classes.sectionDesktop}>
            <Button className={classes.category}>
              <Link
                to="/"
                //className={classes.category}
                //2022/5/5: ad hoc solution: reslove home tag jumping problem: move link tag within button, and use style directly, not sure why className won't work
                style={{ color: "white" }}
              >
                Home
              </Link>
            </Button>
            <Button className={classes.category} onClick={handleInfo}>
              About
            </Button>
            <span className={classes.split}></span>
            <Button
              className={classes.category}
              onClick={() => handleChange(null, 0)}
            >
              Population
            </Button>
            <Button
              className={classes.category}
              onClick={() => handleChange(null, 1)}
            >
              Education
            </Button>
            <Button
              className={classes.category}
              onClick={() => handleChange(null, 2)}
            >
              Income
            </Button>
            <Button
              className={classes.category}
              onClick={() => handleChange(null, 3)}
            >
              Housing
            </Button>
            <Button
              className={classes.category}
              onClick={() => handleChange(null, 4)}
            >
              Labor Force
            </Button>
          </div>
        </Toolbar>
        {loading ? <LoadingBar /> : null}
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

const mapStateToProps = (state) => ({
  generalState: state.general,
  mapState: state.map,
});

export default connect(mapStateToProps)(Appbar1);
