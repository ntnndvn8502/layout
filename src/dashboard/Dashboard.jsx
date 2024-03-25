import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainListItems, SecondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { Outlet } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchBar from './Searchbar';
import Profile from './Profile';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { lime, purple } from '@mui/material/colors';

import DesignedPalette from './DesignPalette';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 270;
const navcolor = 'white';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background: theme.palette.primary,
  zIndex: theme.zIndex.drawer + 1,
  left: theme.spacing(7),
  width: `calc(100% -  ${theme.spacing(7)})`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% -  ${theme.spacing(9)})`,
    left: theme.spacing(9)

  },
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: `calc(${drawerWidth}px - ${theme.spacing(7)})`,

    width: `calc(100% - ${drawerWidth}px )`,
    [theme.breakpoints.up('sm')]: {
      marginLeft: `calc(${drawerWidth}px - ${theme.spacing(9)})`,
      width: `calc(100% - ${drawerWidth}px )`,
      left: theme.spacing(9),
    },

    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,

    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.secondary,
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.





export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [mode, setMode] = React.useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
    } else {
      setMode("light");
    }
  }
  const defaultTheme = createTheme(DesignedPalette(mode));


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar sx={{ boxShadow: 'none', bgcolor: defaultTheme.palette.navbar.main, backgroundImage: 'none' }} position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Grid container>
              <Grid className={defaultTheme.palette.mode === 'dark' && 'specified-btn'} item md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <SearchBar />
              </Grid>
              <Grid item md={6}>
                <Container sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                  <Profile colormode={defaultTheme.palette.mode} />
                  <Button sx={{ minWidth: 50 }} variant='text'>
                    <Box >
                      <Badge color='warning' variant="dot">
                        <NotificationsNoneIcon color='custom' />
                      </Badge>
                    </Box>
                  </Button>
                  <Button onClick={toggleMode} color='custom' sx={{ minWidth: 50 }} variant='text' >
                    {mode === "light" ? <DarkModeOutlinedIcon sx={{ marginTop: '3px' }} /> : <LightModeOutlinedIcon sx={{ marginTop: '3px' }} />}

                  </Button>
                </Container>

              </Grid>

            </Grid>




          </Toolbar>
        </AppBar>
        <Drawer className='fix-scrollbar' variant="permanent" open={open}>
          {/* <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider /> */}
          <List className={defaultTheme.palette.mode === 'dark' && 'specified-focus'} sx={{ pt: 0 }} component="nav">
            <MainListItems open={open} />


          </List>
          <Box sx={{ ml: '10px', position: 'absolute', bottom: 20, left: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
            <IconButton onClick={toggleDrawer} sx={{ cursor: 'pointer', }}>
              <Avatar sx={{ width: 30, height: 30, color: 'black', }}>
                {!open && <NavigateNextIcon />}
                {open && <NavigateBeforeIcon />}


              </Avatar>
            </IconButton>

            <span>Thu gọn</span>

          </Box>


        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Box sx={{ p: '10px' }}>
            <Outlet />
          </Box>

          {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
