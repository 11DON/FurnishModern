import styles from "../pages/login.module.css"; // or signup.module.css later
import logo from "../assets/logo.png";
import { useState } from "react";
import { signUp } from "../backend/api/api";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords don’t match");
      return;
    }

    const data = await signUp(formData);

    if (data.token) {
      localStorage.setItem("token", data.token);
      setMessage("✅ Account created and logged in!");
      // optional: redirect to dashboard here
    } else {
      setMessage(data.message || data.error || "❌ Sign up failed");
    }
  };

  return (
    <div className={styles.loginForm}>
      <form className="form-signin" onSubmit={handleSubmit}>
        <img className="mb-4" src={logo} alt="Logo" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Create an Account</h1>

        <label htmlFor="inputName" className="sr-only">Name</label>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          id="inputName"
          className="form-control mb-2"
          placeholder="Full Name"
          required
        />

        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          id="inputEmail"
          className="form-control mb-2"
          placeholder="Email address"
          required
        />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          id="inputPassword"
          className="form-control mb-2"
          placeholder="Password"
          required
        />

        <label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
        <input
          name="confirmPassword"
          onChange={handleChange}
          type="password"
          id="inputConfirmPassword"
          className="form-control mb-3"
          placeholder="Confirm Password"
          required
        />

        <button className={`btn btn-lg btn-block ${styles.b}`} type="submit">
          Sign Up
        </button>

        {/* ✅ show feedback message */}
        <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
          {message}
        </p>

        <p className="mt-5 mb-3 text-muted">&copy; 2025</p>
      </form>
    </div>
  );
}
