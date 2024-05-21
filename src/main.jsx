import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Notification from './Notification';
import ProTip from './ProTip';
import Home from './home';
import Login from './login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Navigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
var a = false;
const token = sessionStorage.getItem('token');
if (token) {

  a = true;
  console.log(decodeToken(token));


} else {

  a = false;
  console.log('false');

}
var router = createBrowserRouter([{ path: '/login', element: <Login /> }]);
if (a) {
  router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: '/',
          element: <Notification />
        },
        {
          path: '/gian-hang',
          element: <App />
        },
        {
          path: '/bang-dieu-khien',
          element: <ProTip />

        },
        {
          path: "/home",
          element: <Home />
        },

      ]

    },
    {
      path: '/login',
      element: <Navigate to="/home" />
    }
  ])
} else {
  router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <Navigate to="/login" />,
    },
  ]);

}


root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1007733048000-ieebf1cotujl5euv5toer21kdvoltg46.apps.googleusercontent.com">

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </GoogleOAuthProvider>;


  </React.StrictMode>
);
