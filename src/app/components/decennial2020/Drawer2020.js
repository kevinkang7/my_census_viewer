import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Close from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { updateDrawer } from '../../redux/actions';
import Population2020 from './Population2020';
import GroupQuarter from './GroupQuarter';
import Housing2020 from './Housing2020';

const drawerWidth = 700;

const useStyles = makeStyles((theme) => ({
  root: {
    width: window.innerWidth <= 414 ? window.innerWidth : drawerWidth,
    paddingTop: 0,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerHeader: {
    fontSize: '14px',
    color: 'white',
    top: 0,
    zIndex: 7,
    position: '-webkit-sticky',
    position: 'sticky',
    backgroundColor: '#00a6b4',
  },
  paperAnchorRight: {
    top: 64,
    width: drawerWidth,
  },
  fullList: {
    width: 'auto',
    overflowX: 'hidden',
    maxHeight: window.innerWidth <= 414 ? 400 : window.innerHeight - 64,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    color: '#003c50',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Drawer2020(props) {
  const classes = useStyles();
  const [innerWidth] = React.useState(window.innerWidth);
  const handleOpen = () => {
    props.dispatch(updateDrawer(!props.generalState.drawerOpen));
  };

  let content;
  console.log(props.generalState.category);
  switch (props.generalState.category) {
    case 'Population by Race/Ethnicity':
      content = <Population2020 />;
      break;
    case 'Group Quarter Population':
      content = <GroupQuarter />;
      break;
    case 'Housing':
      content = <Housing2020 />;
      break;
  }
  console.log(content);

  const drawer = (
    <div className={classes.fullList}>
      <List component='nav' className={classes.root}>
        <ListItem
          style={{ fontWeight: 'bold', backgroundColor: 'white !important' }}
          className={classes.drawerHeader}
        >
          {props.generalState.category.toUpperCase()}
          <ListItemText />
          <Close onClick={handleOpen} onKeyDown={handleOpen} />
        </ListItem>
        <Divider />
        {content}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Drawer
        anchor={innerWidth <= 414 ? 'bottom' : 'right'}
        open={props.generalState.drawerOpen}
        variant='persistent'
        classes={{
          root: classes.root,
          paperAnchorRight: classes.paperAnchorRight,
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  generalState: state.general,
  mapState: state.map,
});

export default connect(mapStateToProps)(Drawer2020);
