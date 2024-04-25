import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { SupervisorAccount, Handshake, Inventory, Discount, Monitor, Article, Image, Dataset, Bookmark, List } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Collapse, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export function MainListItems(prop) {
  const [active, setActive] = React.useState('');

  const handleActive = (event) => {
    setActive(event.currentTarget.getAttribute("id"));

  };
  var open = prop.open;
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = (event) => {
    setOpen1(!open1);
  }
  if (prop.open) {
    console.log('true');

  } else {
    console.log('false');

  }
  return (
    <React.Fragment>
      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/gian-hang">
        <ListItemButton id='e0' sx={{ display: 'flex', height: '65px' }} className={active === 'e0' && 'active'}>
          <ListItemIcon>
            <img src='/pasgo.png' alt='Logo' width={40} height={40} />
          </ListItemIcon>
          <ListItemText>
            <h1 className='list-title'>Quản trị Pasgo</h1>
          </ListItemText>
        </ListItemButton >
      </Link>

      <ListItemButton id='e1' onClick={handleActive} className={active === 'e1' && 'active'}>
        <ListItemIcon>
          <Monitor />
        </ListItemIcon>
        <ListItemText primary="Bảng điều khiển" />
        <IconButton size='small' onClick={handleOpen1}>
          {open1 === true ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>

      </ListItemButton>

      {open && <Collapse in={open1} timeout="auto" unmountOnExit>
        <Link style={{ color: 'unset', textDecoration: 'none' }} to="/bang-dieu-khien">
          <ListItemButton sx={{ pl: 9 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </Link>

      </Collapse>}
      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/gian-hang">
        <ListItemButton id='e2' onClick={handleActive} className={active === 'e2' && 'active'}>
          <ListItemIcon>
            <SupervisorAccount />
          </ListItemIcon>
          <ListItemText primary="Quản lí tài khoản" />
        </ListItemButton>
      </Link>
      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/">
        <ListItemButton id='e3' onClick={handleActive} className={active === 'e3' && 'active'}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Cài đặt" />
        </ListItemButton>
      </Link>

      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/">
        <ListItemButton id='e4' onClick={handleActive} className={active === 'e4' && 'active'}>
          <ListItemIcon>
            <Discount />
          </ListItemIcon>
          <ListItemText primary="Tin khuyến mãi" />
        </ListItemButton>
      </Link>
      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/">
        <ListItemButton id='e5' onClick={handleActive} className={active === 'e5' && 'active'}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Trang chủ khách hàng" />
        </ListItemButton>
      </Link>
      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/">
        <ListItemButton id='e6' onClick={handleActive} className={active === 'e6' && 'active'}>
          <ListItemIcon>
            <Article />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItemButton>
      </Link>
      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/">
        <ListItemButton id='e7' onClick={handleActive} className={active === 'e7' && 'active'}>
          <ListItemIcon>
            <Image />
          </ListItemIcon>
          <ListItemText primary="Ảnh" />
        </ListItemButton>
      </Link>
      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/">
        <ListItemButton id='e8' onClick={handleActive} className={active === 'e8' && 'active'}>
          <ListItemIcon>
            <Dataset />
          </ListItemIcon>
          <ListItemText primary="Dữ liệu" />
        </ListItemButton>
      </Link>
      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/">
        <ListItemButton id='e9' onClick={handleActive} className={active === 'e9' && 'active'}>
          <ListItemIcon>
            <Bookmark />
          </ListItemIcon>
          <ListItemText primary="Thẻ tag" />
        </ListItemButton>
      </Link>
      <Link style={{ color: 'unset', textDecoration: 'none' }} to="/">
        <ListItemButton id='e10' onClick={handleActive} className={active === 'e10' && 'active'}>
          <ListItemIcon>
            <Handshake />
          </ListItemIcon>
          <ListItemText primary="Đối tác" />
        </ListItemButton>
      </Link>


    </React.Fragment>
  );
}

export function SecondaryListItems() {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </React.Fragment>
  );

}  
