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

export default function App() {
  let array = [];
  for (let i = 1; i <= 5; i++) {
    array.push(
      <Container sx={{ mt: 5, mb: 5 }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',

              }}
            >
              <h1>Hello User</h1>
              <p>Chào mừng đến với trang quản trị</p>
              <Notification />



            </Paper>
          </Grid>
        </Grid>

      </Container>

    )
  }
  return (
    <>

      {array}

    </>

  );
}
