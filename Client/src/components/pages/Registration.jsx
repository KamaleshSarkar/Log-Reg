import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { registration } from "../../features/Slice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Registration = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, password } = formValue;
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  const [image, setImage] = useState(null);
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error || toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    dispatch(registration({ formData, navigate }));
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">
                    <i className="zmdi zmdi-image" />
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImage}
                    placeholder="Upload Your Image"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pass">
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
                    name="agree-term"
                    id="agree-term"
                    className="agree-term"
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span />
                    </span>
                    I agree all statements in{" "}
                    <a href="#" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    className="form-submit"
                    defaultValue="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="images/signup-image.jpg" alt="sing up image" />
              </figure>
              <Link to="/" className="signup-image-link">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
