import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth-context";
import { getNotes, addNote } from "../services";

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);

const NoteProvider = ({ children }) => {
  const { userData } = useAuth();
  const [notes, setNotes] = useState([]);

  const saveNote = async (newNote) => {
    if (userData.isLoggedIn) {
      const { data, status } = await addNote(userData.userToken, newNote);
      if (status === 201) {
        setNotes(() => data.notes);
      } else {
        console.error("failed to fetch notes");
      }
      console.log(notes);
    }
  };

  useEffect(() => {
    (async () => {
      if (userData.isLoggedIn) {
        const { data, status } = await getNotes(userData.userToken);
        if (status === 200) {
          setNotes(() => data.notes);
        }
      }
    })();
  }, [userData]);

  return (
    <NoteContext.Provider value={{ notes, saveNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteProvider };
