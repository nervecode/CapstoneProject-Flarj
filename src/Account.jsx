import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./components/styles/Account.css";

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navacc = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock validation (replace with actual authentication)
    if (username === "nalsian" && password === "2024") {
      navacc("/HomePage"); // Redirect to homepage after successful login
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="account">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Account;
