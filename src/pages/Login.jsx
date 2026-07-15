import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {
            email: "",
            password: "",
        };

        if (email.trim() === "") {
            newErrors.email = "Email is required";
        }

        if (password.trim() === "") {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

if (newErrors.email === "" && newErrors.password === "") {
    navigate("/dashboard");
}
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
                        onChange={(e) => {
                            setEmail(e.target.value);

                            setErrors({
                                ...errors,
                                email: "",
                            });
                        }}
                    />
                    {errors.email && (
                        <p className="text-danger mt-1">{errors.email}</p>
                    )}

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);

                            setErrors({
                                ...errors,
                                password: "",
                            });
                        }}
                    />

                    {errors.password && (
                        <p className="text-danger mt-1">{errors.password}</p>
                    )}


                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </MainLayout>
    );
}

export default Login;