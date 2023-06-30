import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { LoginPage, HomePage } from './pages/home-services';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from './themes/darktheme';
// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_ID ="699812083032-m1m692lkpg6tmud6oesl6tauga9bcodu.apps.googleusercontent.com"

const App = () => {  
  return (  
    <NextUIProvider theme={darkTheme}>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  </GoogleOAuthProvider>
  </NextUIProvider>
  );  
};

export default App;