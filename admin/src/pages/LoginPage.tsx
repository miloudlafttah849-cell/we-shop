import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  email: string;
  // Add other properties from the token if needed
}

const LoginPage = () => {
  const allowedEmail = 'your-email@gmail.com'; // IMPORTANT: Replace with your email address

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<DecodedToken>(credentialResponse.credential);
      const email = decoded.email;

      if (email === allowedEmail) {
        console.log('Login successful');
        // TODO: Handle successful login (e.g., set a token in local storage and redirect)
      } else {
        console.log('Unauthorized email');
        // TODO: Handle unauthorized email
      }
    } else {
      console.error('Login failed: No credential response');
      // TODO: Handle login failure
    }
  };

  const handleLoginFailure = () => {
    console.error('Login failed');
    // TODO: Handle login failure
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <p>Please log in with your Google account.</p>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
};

export default LoginPage;
