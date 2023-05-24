import { register } from 'Redux/auth/operations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div class="form-box">
      <form onSubmit={handleSubmit} class="form">
        <span class="title">Sign up</span>
        <span class="subtitle">Create account with your email.</span>
        <div class="form-container">
          <input
            type="text"
            name="name"
            class="input"
            placeholder="Full Name"
          />
          <input type="email" name="email" class="input" placeholder="Email" />
          <input
            type="password"
            name="password"
            class="input"
            placeholder="Password"
          />
        </div>
        <button>Sign up</button>
      </form>
      <div class="form-section">
        <p>
          Have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
