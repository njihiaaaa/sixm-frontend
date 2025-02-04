import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Now it's being used

  const handleLogin = async (e) => { // ✅ Properly defined function
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/users/login", { email, password }); 
      alert("Login Successful!");
      navigate("/products"); // ✅ Now used properly
    } catch (error) {
      alert("Error logging in, please check your credentials.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}> {/* ✅ Now handleLogin is defined */}
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
