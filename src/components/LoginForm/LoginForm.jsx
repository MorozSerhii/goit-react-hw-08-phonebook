import { logIn } from 'Redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit} className="form">
        <span className="title">Sign up</span>
        <span className="subtitle">Create account with your email.</span>
        <div className="form-container">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
        </div>
        <button>Sign up</button>
      </form>
      <div className="form-section">
        <p>
          Have an account? <Link to="/register">Registration</Link>
        </p>
      </div>
    </div>
  );
};
export default LoginForm;
