import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Tabs,
  Tab,
  Box
} from "@mui/material";
import { motion } from "framer-motion";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../FirebaseConfig"; // your firebase config
import "../index.css";
import GoogleLoginButton from "../GoogleLoginButton";

const LoginRegister = () => {
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("");
  }, [tab, email, password]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Registration successful! 🎉");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful! 🚀");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setMessage(`Welcome, ${user.displayName}! 🎉`);
      console.log("Google User Info:", user);
      // Optional: Redirect or further logic
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };

  return (
    <Box className="auth-container">
      <Paper elevation={6} className="auth-paper">
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="auth-button"
            onClick={tab === 0 ? handleLogin : handleRegister}
            style={{ marginTop: "16px" }}
          >
            {tab === 0 ? "Login" : "Register"}
          </Button>

          <Typography
            variant="body2"
            align="center"
            style={{ margin: "16px 0", color: "#888" }}
          >
            OR
          </Typography>

          {/* Google Login Button */}
          <Button
            fullWidth
            variant="outlined"
            className="google-login-button"
            onClick={handleGoogleLogin}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "10px",
              textTransform: "none"
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg"
              alt="Google Logo"
              style={{ width: "20px", height: "20px" }}
            />
            <GoogleLoginButton />
          </Button>

          {message && (
            <Typography
              variant="body2"
              color={
                message.includes("successful") || message.includes("Welcome")
                  ? "green"
                  : "error"
              }
              align="center"
              style={{ marginTop: "10px" }}
            >
              {message}
            </Typography>
          )}
        </motion.div>
      </Paper>
    </Box>
  );
};

export default LoginRegister;
