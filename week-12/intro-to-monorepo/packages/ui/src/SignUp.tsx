import { Button, Card, Input } from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          margin: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input
        placeholder="Enter your email"
        type="email"
        fullWidth
        sx={{ marginBottom: 2 }}
    />
    <Input
        placeholder="Enter your password"
        type="password"
        fullWidth
        sx={{ marginBottom: 2 }}
    />
    <Button variant="contained" color="primary">
        Sign Up
    </Button>
      </div>
    </div>
  );
};

export default SignUp;
