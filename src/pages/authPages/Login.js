import "./auth.css";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { loginHandler } from "../../services";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useAuth();
  const [isPasswdVisible, setIsPasswdVisible] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="loginform-container">
      <img
        className="loginform-img"
        src="/images/keeper-vt.png"
        alt="keeper-logo"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(loginFormData, userData, setUserData);
        }}
        className="login-form"
      >
        <div className="login-form-input">
          <label>UserName</label>
          <input
            type="email"
            value={loginFormData.email}
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, email: e.target.value })
            }
          />
        </div>
        <div className="login-form-input password">
          <label>Password</label>
          <input
            type={isPasswdVisible ? "text" : "password"}
            value={loginFormData.password}
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, password: e.target.value })
            }
          />
          <span
            className="passwd-visible"
            onClick={() => setIsPasswdVisible(!isPasswdVisible)}
          >
            {isPasswdVisible ? (
              <i className="far fa-eye"></i>
            ) : (
              <i className="far fa-eye-slash"></i>
            )}
          </span>
        </div>
        <button className="login-btn">Login</button>
        <p
          className="login-dummy-creds"
          onClick={() =>
            setLoginFormData({
              ...loginFormData,
              email: "johndoe@gmail.com",
              password: "john123",
            })
          }
        >
          Fill dummy credentials
        </p>
        <p className="login-to-signup">
          New to Keeper?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </form>
    </div>
  );
};
