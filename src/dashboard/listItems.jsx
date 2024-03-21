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
import { SupervisorAccount, Handshake, Inventory, Discount, Monitor, Article, Image, Dataset, Bookmark } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export function MainListItems() {
  const [active, setActive] = React.useState('');

  const handleActive = (event) => {
    setActive(event.currentTarget.getAttribute("id"));
    console.log(active);
  };
  return (
    <React.Fragment>
      <ListItemButton id='e0' sx={{ display: 'flex', height: '65px' }} className={active === 'e0' && 'active'}>
        <ListItemIcon>
          <img src='/pasgo.png' alt='Logo' width={40} height={40} />
        </ListItemIcon>
        <ListItemText>
          <h1 className='list-title'>Quản trị Pasgo</h1>
        </ListItemText>
      </ListItemButton>
      <ListItemButton id='e1' onClick={handleActive} className={active === 'e1' && 'active'}>
        <ListItemIcon>
          <Monitor />
        </ListItemIcon>
        <ListItemText primary="Bảng điều khiển" />
      </ListItemButton>
      <ListItemButton id='e2' onClick={handleActive} className={active === 'e2' && 'active'}>
        <ListItemIcon>
          <SupervisorAccount />
        </ListItemIcon>
        <ListItemText primary="Quản lí tài khoản" />
      </ListItemButton>
      <ListItemButton id='e3' onClick={handleActive} className={active === 'e3' && 'active'}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Cài đặt" />
      </ListItemButton>
      <ListItemButton id='e4' onClick={handleActive} className={active === 'e4' && 'active'}>
        <ListItemIcon>
          <Discount />
        </ListItemIcon>
        <ListItemText primary="Tin khuyến mãi" />
      </ListItemButton>
      <ListItemButton id='e5' onClick={handleActive} className={active === 'e5' && 'active'}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Trang chủ khách hàng" />
      </ListItemButton>
      <ListItemButton id='e6' onClick={handleActive} className={active === 'e6' && 'active'}>
        <ListItemIcon>
          <Article />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItemButton>
      <ListItemButton id='e7' onClick={handleActive} className={active === 'e7' && 'active'}>
        <ListItemIcon>
          <Image />
        </ListItemIcon>
        <ListItemText primary="Ảnh" />
      </ListItemButton>
      <ListItemButton id='e8' onClick={handleActive} className={active === 'e8' && 'active'}>
        <ListItemIcon>
          <Dataset />
        </ListItemIcon>
        <ListItemText primary="Dữ liệu" />
      </ListItemButton>
      <ListItemButton id='e9' onClick={handleActive} className={active === 'e9' && 'active'}>
        <ListItemIcon>
          <Bookmark />
        </ListItemIcon>
        <ListItemText primary="Thẻ tag" />
      </ListItemButton>
      <ListItemButton id='e10' onClick={handleActive} className={active === 'e10' && 'active'}>
        <ListItemIcon>
          <Handshake />
        </ListItemIcon>
        <ListItemText primary="Đối tác" />
      </ListItemButton>


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
