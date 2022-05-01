import "./auth.css";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { signupHandler } from "../../services";

export const Signup = () => {
  const [signupFormData, setSignupFormData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [isPasswdVisible, setIsPasswdVisible] = useState({
    passwd: false,
    cpasswd: false,
  });
  const { userData, setUserData } = useAuth();

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
          signupHandler(signupFormData, userData, setUserData);
        }}
        className="login-form"
      >
        <div className="login-form-input">
          <label>FirstName</label>
          <input
            type="text"
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                firstName: e.target.value,
              })
            }
          />
        </div>
        <div className="login-form-input">
          <label>LastName</label>
          <input
            type="text"
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                lastName: e.target.value,
              })
            }
          />
        </div>
        <div className="login-form-input">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="login-form-input password">
          <label>Password</label>
          <input
            type={isPasswdVisible.passwd ? "text" : "password"}
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                password: e.target.value,
              })
            }
          />
          <span
            className="passwd-visible"
            onClick={() =>
              setIsPasswdVisible({
                ...isPasswdVisible,
                passwd: !isPasswdVisible.passwd,
              })
            }
          >
            {isPasswdVisible.passwd ? (
              <i className="far fa-eye"></i>
            ) : (
              <i className="far fa-eye-slash"></i>
            )}
          </span>
        </div>
        <div className="login-form-input password">
          <label>Confirm Password</label>
          <input
            type={isPasswdVisible.cpasswd ? "text" : "password"}
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                confirmPassword: e.target.value,
              })
            }
          />
          <span
            className="passwd-visible"
            onClick={() =>
              setIsPasswdVisible({
                ...isPasswdVisible,
                cpasswd: !isPasswdVisible.cpasswd,
              })
            }
          >
            {isPasswdVisible.cpasswd ? (
              <i className="far fa-eye"></i>
            ) : (
              <i className="far fa-eye-slash"></i>
            )}
          </span>
        </div>
        {signupFormData.password !== signupFormData.confirmPassword && (
          <p className="match-password">Passwords are not matching</p>
        )}
        <button className="login-btn">Sign Up</button>
      </form>
    </div>
  );
};
