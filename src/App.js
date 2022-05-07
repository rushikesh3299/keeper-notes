import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Mockman from "mockman-js";
import { Home } from "./pages";
import { Header, Footer } from "./components";
import { Signup, Login, NotePage } from "./pages";

const App = () => {
  const location = useLocation();
  const noHeaderPaths = ["/", "/login", "/signup"];
  return (
    <div className="App">
      {!noHeaderPaths.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notepage" element={<NotePage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>

      {!noHeaderPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
