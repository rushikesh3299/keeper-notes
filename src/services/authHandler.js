import axios from "axios";

export const loginHandler = (loginFormData, userData, userDataSetter) => {
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/login", {
        email: loginFormData.email,
        password: loginFormData.password,
      });
      if (status === 200) {
        userDataSetter(true, data.encodedToken);
        localStorage.setItem("token", data.encodedToken);
      }
    } catch (error) {
      console.error(error);
    }
  })();
};

export const signupHandler = (signupFormData, userData, userDataSetter) => {
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/signup", {
        firstName: signupFormData.firstName,
        lastName: signupFormData.lastName,
        email: signupFormData.email,
        password: signupFormData.password,
      });
      if (status === 201) {
        userDataSetter(true, data.encodedToken);
        localStorage.setItem("token", data.encodedToken);
      }
    } catch (error) {
      console.error(error);
    }
  })();
};
