import { createContext, useContext, useState } from "react";
import { loginHandler, signupHandler } from "../services";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const getToken = localStorage.getItem("token");
const isTokenSet = getToken ? true : false;

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isLoggedIn: isTokenSet,
    userToken: getToken,
  });

  const loginService = async ({ email, password }) => {
    const { data, status } = await loginHandler(email, password);
    if (status === 200) {
      localStorage.setItem("token", data.encodedToken);
      setUserData({
        ...userData,
        isLoggedIn: true,
        userToken: data.encodedToken,
      });
    }
  };

  const signupService = async ({ firstName, lastName, email, password }) => {
    const { data, status } = await signupHandler(email, password);
    if (status === 201) {
      localStorage.setItem("token", data.encodedToken);
      setUserData({
        ...userData,
        isLoggedIn: true,
        userToken: data.encodedToken,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ userData, loginService, signupService }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
