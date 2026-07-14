import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <MainLayout>

      <div className="login-container">

        <form className="login-card" onSubmit={handleSubmit}>

          <h2>Login</h2>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </MainLayout>
  );
}

export default Login;