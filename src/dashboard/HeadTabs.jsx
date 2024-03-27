import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Card } from '@mui/material';
import FullWCard from './FullWCard';
export const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',

  },
  '& .MuiTabs-indicatorSpan': {

    width: '100%',
    backgroundColor: '#F01B23',
  },
});

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '16px',
  color: theme.palette.menu.main,
  '&.Mui-selected': {
    color: theme.palette.menu.dark,
    fontWeight: 'bold',
  },

}),
);

export default function HeadTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <FullWCard>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="Cài đặt cơ bản" />
        <StyledTab label="Cài đặt kinh doanh" />
        <StyledTab label="Cài đặt truyền thông" />
        <StyledTab label="Cài đặt đặt chỗ" />
        <StyledTab label="Cài đặt sản phẩm" />
      </StyledTabs>
    </FullWCard>



  );
}
