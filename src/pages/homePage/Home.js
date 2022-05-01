import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">
        Keeper <span>Notes</span>
      </h1>
      <h2 className="homepage-subtitle subtitle1">Meet Your Modern</h2>
      <h2 className="homepage-subtitle">Note Taking App</h2>
      <img
        src="images/homepage_image.jpg"
        alt="homepage iamge"
        className="homepage-img"
      />
      <p className="homepage-text">
        Manages your daily tasks & workflows in a modern way & boost your
        efficiency without any efforts.
      </p>
      <button className="signup-btn" onClick={() => navigate("/signup")}>
        Join Now
      </button>
      <p className="login-text" onClick={() => navigate("/login")}>
        Already have an account?
      </p>
    </div>
  );
};
