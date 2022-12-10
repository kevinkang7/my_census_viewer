import React, { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';
import $ from 'jquery';
import { makeStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { connect, useDispatch } from 'react-redux';
import {
  clearData,
  updateSelected,
  updateSelected2,
  updateNeighborhood,
} from '../../redux/actions';

const color = {
  main: '#003c50',
  second: '#2A5C6D',
  third: '#557D8A',
};

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: color.second,
    '&:hover': {
      backgroundColor: color.third,
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4),
      width: '30rem',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '65%',
    [theme.breakpoints.up('sm')]: {
      width: '25rem',
    },
    '&:disabled': {
      color: 'white',
      cursor: 'not-allowed',
    },
  },
  results: {
    backgroundColor: 'white',
  },
}));

const Search = (props) => {
  const {
    queryLayer,
    handleResultClickLayer,
    handleResultClickNeighborhood,
    setLoading,
  } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchTextThreshold, setSearchTextThreshold] = useState();
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchEnable, setSearchEnable] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setSearchText('');
    setSearchResult([]);
    if (props.mapState.layer === 'city') {
      setSearchEnable(false);
    } else {
      setSearchEnable(true);
    }
  }, [props.mapState.layer]);

  useEffect(() => {
    console.log(props.mapState);
    if (props.mapState.survey === 'ACS') {
      setSearchTextThreshold(7);
    } else if (props.mapState.survey === '2020') {
      setSearchTextThreshold(7);
    }
  }, [props.mapState.survey]);

  const noResult = () => {
    setLoading(false);
    setSearchResult([]);
    setShowResult(true);
    clearDataFromRedux();
  };

  const handleSearchEnter = (e) => {
    if (e.charCode == 13) {
      console.log(searchText, searchTextThreshold);
      handleClearSearch();
      setAnchorEl(e.currentTarget);
      setLoading(true);
      if (!isNaN(searchText)) {
        if (searchText.length <= searchTextThreshold) {
          handleQuery(searchText);
        } else {
          noResult();
        }
      } else {
        querySAM(searchText);
      }
    }
  };

  const handleSearchTextChange = (e) => {
    setShowResult(false);
    setSearchResult([]);
    setSearchText(e.target.value);
  };

  const handleInputClick = () => {
    if (searchResult.length) {
      setShowResult(true);
    }
  };

  const handleClickAway = () => {
    setShowResult(false);
  };

  const clearDataFromRedux = () => {
    dispatch(updateSelected([]));
    dispatch(updateSelected2([]));
    dispatch(updateNeighborhood());
    dispatch(clearData());
  };

  const handleClearSearchResultClick = () => {
    props.mapState.view.graphics.removeAll();
    props.mapState.view.popup.close();
    props.mapState.view.popup.clear();
    setShowResult(false);
    clearDataFromRedux();
  };

  const handleClearSearch = () => {
    setSearchResult([]);
    handleClearSearchResultClick();
  };

  const handleQuery = async (searchText) => {
    const response = await queryLayer(searchText);
    console.log(response);
    if (response === false) noResult();
  };

  const querySAM = (searchText) => {
    setLoading(true);
    let samServerUrl = 'https://map01.cityofboston.gov/samapi/api/v1/searchq';
    $.get(
      {
        url: samServerUrl,
        data: { q: searchText },
        dataType: 'jsonp',
      },
      () => {
        console.log('success');
      }
    ).done((response) => {
      if (response.addressResults) {
        let arr = [];
        response.addressResults.forEach(function (result) {
          arr.push({
            address: result.fullAddress,
            location: { y: result.latitude, x: result.longitude },
          });
        });
        if (arr.length > 1) {
          setSearchResult(arr);
          setShowResult(true);
          setLoading(false);
        } else if (arr.length === 1) {
          setSearchResult(arr);
          setShowResult(false);
          setLoading(false);
          handleResultClick(arr[0]);
        }
      } else {
        noResult();
      }
    });
  };

  const handleResultClick = async (result) => {
    handleClearSearchResultClick();
    loadModules(['esri/geometry/Point', 'esri/Graphic']).then(
      ([Point, Graphic]) => {
        let point = new Point({
          latitude: result.location.y,
          longitude: result.location.x,
          spatialReference: { wkid: 3857 },
        });
        const g = new Graphic({
          geometry: point,
          attributes: { address: result.address },
          symbol: {
            type: 'simple-marker',
            size: 8,
            color: 'blue',
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
        });
        props.mapState.view.graphics.add(g);
        props.mapState.view.popup.open({
          location: point,
          title: result.address,
        });
      }
    );
    if (
      props.mapState.layer === 'tracts' ||
      props.mapState.layer === 'blockgroups'
    ) {
      const response = await handleResultClickLayer(result);
      if (response === false) noResult();
    } else if (props.mapState.layer === 'neighborhood') {
      const response = await handleResultClickNeighborhood(result);
      if (response === false) noResult();
    }
  };

  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={
                props.mapState.survey === 'ACS'
                  ? 'Address or Census Tract…'
                  : 'Address or Block Group…'
              }
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchTextChange}
              onKeyPress={handleSearchEnter}
              onClick={handleInputClick}
              value={searchText}
              disabled={!searchEnable}
            />
          </div>
          <Popper
            open={showResult}
            anchorEl={anchorEl}
            placement={'bottom-start'}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={300}>
                <Paper>
                  <MenuList style={{ maxHeight: 250, overflow: 'auto' }}>
                    {searchResult.length ? (
                      searchResult.map((result, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => handleResultClick(result)}
                        >
                          {result.address}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem>No Result</MenuItem>
                    )}
                  </MenuList>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </ClickAwayListener>
    </div>
  );
};

const mapStateToProps = (state) => ({
  generalState: state.general,
  mapState: state.map,
});

export default connect(mapStateToProps)(Search);
