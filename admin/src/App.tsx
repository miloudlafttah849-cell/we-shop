import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com">
      <div className="App">
        <LoginPage />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
