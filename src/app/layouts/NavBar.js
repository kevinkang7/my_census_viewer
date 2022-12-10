import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import logo from '../images/BPDAlogo.png';

const color = {
  main: '#003c50',
  second: '#2A5C6D',
  third: '#557D8A',
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: color.main,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    // borderRight: '1px solid #6a6a6a',
    height: '4rem',
    width: '12rem',
    marginRight: 20,
  },
  link: {
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <CardMedia className={classes.logo} image={logo} />
          <Typography variant='h6' className={classes.title}>
            MyCensus Viewer
          </Typography>
          {props.children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
