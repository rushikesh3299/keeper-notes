import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const getToken = localStorage.getItem("token");
const isTokenSet = getToken ? true : false;

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isLoggedIn: isTokenSet,
    userToken: getToken,
  });

  const userDataSetter = (isLoggedInVal, userTokenVal) => {
    setUserData({
      ...userData,
      isLoggedIn: isLoggedInVal,
      userToken: userTokenVal,
    });
  };
  return (
    <AuthContext.Provider value={{ userData, userDataSetter }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
