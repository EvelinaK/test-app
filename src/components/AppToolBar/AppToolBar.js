import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { styled } from '@mui/material/styles';
function ToolBar() {
  
const StyledToolbar = styled(AppBar )({
   backgroundColor: '##e1e6e',
    background: 'linear-gradient(45deg, #d0cbcc 30%, #b7c1e7 90%)'
});
  return (
        <StyledToolbar position="fixed" color="primary" sx={{top: 'auto', bottom: 0, minHeight: '30px'}}>
            <Toolbar> 
        </Toolbar>
        </StyledToolbar>
  );
}

export default ToolBar;
