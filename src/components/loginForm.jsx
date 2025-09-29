import styles from "../pages/login.module.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { login as apiLogin } from "../backend/api/api"; // ✅ rename import
import { AuthContext } from "./AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const { login } = useContext(AuthContext); // ✅ from context
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await apiLogin(formData); // ✅ call API login

    if (data.token) {
      // save user in context
      login(data.user); // ✅ store user in AuthContext
      localStorage.setItem("token", data.token);

      setMessage("Logged in successfully!");
      navigate("/"); // ✅ redirect to home
    } else {
      setMessage(data.error || "Login failed");
    }
  };

  return (
    <div className={styles.loginForm}>
      <form className="form-signin" onSubmit={handleSubmit}>
        <img className="mb-4" src={logo} alt="Logo" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />

        <div className="mb-3">
          <Link to="/signUp" className="btn btn-outline-dark mt-3">
            Not a user? SignUp
          </Link>
        </div>

        <button className={`btn btn-lg btn-block ${styles.b}`} type="submit">
          Sign in
        </button>

        {message && <p style={{ color: "red" }}>{message}</p>} {/* ✅ show messages */}
        <p className="mt-5 mb-3 text-muted">&copy; 2025</p>
      </form>
    </div>
  );
}
