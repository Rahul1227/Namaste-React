import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long and include letters and numbers."
      );
      return;
    }

    setSuccessMessage("Registration successful! You can now login.");
  };

  return (
    <div className="register-container mx-auto bg-white p-5 rounded shadow-md w-4/12">
      <h2 className="text-2xl font-bold text-center mb-5">Register</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 mb-3 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full p-2 mb-3 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        Register
      </button>
      {successMessage && (
        <p className="text-green-500 text-sm mt-3">{successMessage}</p>
      )}
    </div>
  );
};

export default Register;
