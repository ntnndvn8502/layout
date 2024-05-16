import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { Avatar } from '@mui/material';

export default function Profile(prop) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const nav = useNavigate();
  const Logout = () => {
    googleLogout();
    sessionStorage.removeItem('token');
    nav('/login');
  }


  return (
    <div>


      <Button sx={{ minWidth: 200 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='custom'
      >
        <Avatar>N</Avatar>
        <span style={{ textTransform: 'none', fontWeight: 'bold', marginInline: 8 }}>Nguyen Trong Nghia</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </Button>
      <Menu

        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ width: '200px' }} onClick={handleClose}>Profile</MenuItem>
        <MenuItem sx={{ width: '200px' }} onClick={handleClose}>My account</MenuItem>
        <MenuItem sx={{ width: '200px' }} onClick={Logout}>Logout</MenuItem>
      </Menu>


    </div>
  );
}
