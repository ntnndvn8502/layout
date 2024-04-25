import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';
import Dashboard from "./dashboard/Dashboard";
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Paper, Card } from '@mui/material';
import Chart from './dashboard/Chart';
import { bgcolor } from '@mui/system';
import { Link } from '@mui/material';
import { Button } from '@mui/material';
import "./style.css";
import Notification from './Notification';
import HeadTabs from './dashboard/HeadTabs';
import CommonInfo from './dashboard/CommonInfo';
import Summary from './dashboard/Summary';
import Regulation from './dashboard/Regulation';


export default function App() {





  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
        <h2 style={{ margin: 0 }}>Gian hàng và mặt hàng</h2>
        <Button sx={{ borderRadius: '10px' }} color='warning' variant="outlined">Cập nhật</Button>
      </Box>
      <HeadTabs />
      <CommonInfo />
      <Summary />
      <Regulation />



    </>

  );
}
