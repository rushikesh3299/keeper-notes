import axios from "axios";

export const getNotes = async (token) => {
  try {
    const { data, status } = await axios.get("/api/notes", {
      headers: {
        authorization: token,
      },
    });
    return { data, status };
  } catch (error) {
    console.error(error);
  }
};
//Object.values(myobj).reduce((acc, curr)=> acc=curr+acc,"")

export const addNote = async (token, note) => {
  try {
    const { data, status } = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return { data, status };
  } catch (error) {
    console.error(error);
  }
};
