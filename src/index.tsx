import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { BusApp } from './components/BusApp';
import { PassportApp } from './components/Passport';
import { Box, Button } from '@mui/material';
import { PassportProvider } from './contexts/PassportAppContext';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/bus",
    element:<BusApp/>
  },
  {
    path: "passport",
    element: (
      <PassportProvider>
        <PassportApp/>
      </PassportProvider>
    )
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" ,maxWidth:200,margin:"0 auto",mt:5 }}>
      <Button variant='contained' sx={{mb:2}}>
        <a href='/bus' style={{textDecoration:"none",color:"white"}}>Bus App</a>
        </Button>
      <Button variant='contained'>
        <a href='/passport' style={{textDecoration:"none",color:"white"}}>Passport App</a>
        </Button>
    </Box>
  )
}