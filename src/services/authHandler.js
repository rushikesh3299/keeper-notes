import axios from "axios";

export const loginHandler = (loginFormData, userData, setUserData) => {
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/login", {
        email: loginFormData.email,
        password: loginFormData.password,
      });
      if (status === 200) {
        setUserData({
          ...userData,
          isLoggedIn: true,
          userToken: data.encodedToken,
        });
        localStorage.setItem("token", data.encodedToken);
      }
    } catch (error) {
      console.error(error);
    }
  })();
};

export const signupHandler = (signupFormData, userData, setUserData) => {
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/signup", {
        firstName: signupFormData.firstName,
        lastName: signupFormData.lastName,
        email: signupFormData.email,
        password: signupFormData.password,
      });
      if (status === 201) {
        setUserData({
          ...userData,
          isLoggedIn: true,
          userToken: data.encodedToken,
        });
        localStorage.setItem("token", data.encodedToken);
      }
    } catch (error) {
      console.error(error);
    }
  })();
};
