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

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter([
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

      }
    ]

  }
])

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
    ,
  </React.StrictMode>,
);
