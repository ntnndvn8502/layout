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
  return (
    <React.Fragment>
      <ListItemButton sx={{ display: 'flex' }}>
        <ListItemIcon>
          <img src='/pasgo.png' alt='Logo' width={40} height={40} />
        </ListItemIcon>
        <ListItemText>
          <h1 className='list-title'>Quản trị Pasgo</h1>
        </ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Monitor />
        </ListItemIcon>
        <ListItemText primary="Bảng điều khiển" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SupervisorAccount />
        </ListItemIcon>
        <ListItemText primary="Quản lí tài khoản" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Cài đặt" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Discount />
        </ListItemIcon>
        <ListItemText primary="Tin khuyến mãi" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Trang chủ khách hàng" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Article />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Image />
        </ListItemIcon>
        <ListItemText primary="Ảnh" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Dataset />
        </ListItemIcon>
        <ListItemText primary="Dữ liệu" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Bookmark />
        </ListItemIcon>
        <ListItemText primary="Thẻ tag" />
      </ListItemButton>
      <ListItemButton>
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
