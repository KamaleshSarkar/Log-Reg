import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../features/Slice";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error || toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src="images/signin-image.jpg" alt="sing up image" />
              </figure>
              <Link to="/registration" className="signup-image-link">
                Create an account
              </Link>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="register-form"
                id="login-form"
              >
                <div className="form-group">
                  <label htmlFor="your_email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    placeholder="Your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="agree-term"
                  />
                  <label htmlFor="remember-me" className="label-agree-term">
                    <span>
                      <span />
                    </span>
                    Remember me
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    defaultValue="Log in"
                  />
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li>
                    <Link href="#">
                      <i className="display-flex-center zmdi zmdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="display-flex-center zmdi zmdi-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="display-flex-center zmdi zmdi-google" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
