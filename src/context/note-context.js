import { createContext, useContext, useState } from "react";

const NoteContext = createContext();
const useNote = useContext(NoteContext);

const NoteProvider = ({ children }) => {
  return <NoteContext.Provider>{children}</NoteContext.Provider>;
};

export { useNote, NoteProvider };
