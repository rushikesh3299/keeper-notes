import axios from "axios";

export const loginHandler = async (email, password) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    return { data, status };
  } catch (error) {
    console.error(error);
  }
};

export const signupHandler = async (firstName, lastName, email, password) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    return { data, status };
  } catch (error) {
    console.error(error);
  }
};
