

import { useState } from 'react';
import { login } from './Utils';
import './loginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError(""); // Clear error message on new attempt
    setIsLoading(true); // Disable the button while logging in

    try {
      await login({ email, password });
      alert("Login successful!");
    } catch (err) {
      setError(err.message); // Set error message if login fails
    } finally {
      setIsLoading(false); // Re-enable the button after login attempt
    }
  };

  const isDisabled = !email || password.length < 6 || isLoading;

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && (
        <div className="errorMessage">
          {error}
        </div>
      )}

      <div className="button">
        <button onClick={handleLogin} disabled={isDisabled}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
