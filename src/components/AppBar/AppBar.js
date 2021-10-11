import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function ButtonAppBar() {
  const classes = useStyles();

  return (

      <AppBar
        position="static"
        classes={{
          root: classes.root,
          label: classes.label,
        }}
      >
        <Toolbar>
          <Typography variant="h6">
            <NavLink
              exact
              to="/"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Home
            </NavLink>
          </Typography>
          <Typography variant="h6">
            <NavLink
              to="/products"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Products
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
  
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '##e1e6e',
    background: 'linear-gradient(45deg, #d0cbcc 30%, #b7c1e7 90%)',
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: '#9dcfd5',
  },
  title: {
    flexGrow: 1,
  },
}));
export default ButtonAppBar;
