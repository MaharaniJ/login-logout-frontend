import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from './themes/darktheme';
import App from './App';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

ReactDOM.render(
  <NextUIProvider theme={darkTheme}>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </NextUIProvider>,
  document.getElementById('root')
);
