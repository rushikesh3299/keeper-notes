import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Mockman from "mockman-js";
import { Home } from "./pages";
import { Header, Footer } from "./components";
import { Signup, Login } from "./pages";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>

      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/" && <Footer />}
    </div>
  );
};

export default App;
