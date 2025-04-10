import React from 'react';
import { auth } from './FirebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './index.css'; // Optional, for CSS

export default function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User Info:', user);
      alert(`Welcome, ${user.displayName}!`);
      // Optionally redirect or do something with user info
    } catch (error) {
      console.error(error);
      alert('Google sign-in failed. Please try again.');
    }
  };

  return (
    <button className="google-login-button" onClick={handleGoogleLogin}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_%22G%22_Logo.svg"
        alt="Google Logo"
        className="google-logo"
      />
      Continue with Google
    </button>
  );
}
