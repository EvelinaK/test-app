import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
function ToolBar() {
  
const StyledToolbar = styled(Toolbar)({
   backgroundColor: '##e1e6e',
    background: 'linear-gradient(45deg, #d0cbcc 30%, #b7c1e7 90%)'
});
  return (
        <StyledToolbar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Box sx={{ flexGrow: 1 }} />
        </StyledToolbar>
  );
}

export default ToolBar;
