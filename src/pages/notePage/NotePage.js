import "./notePage.css";
import { Sidebar } from "../../components";
import parse from "html-react-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { useNote } from "../../context";

export const NotePage = () => {
  const [noteData, setNoteData] = useState({
    noteText: "Take your note here...",
    noteTitle: "Note title...",
  });

  const { notes, saveNote } = useNote();
  const handleText = (e, editor) => {
    const data = editor.getData();
    setNoteData({ ...noteData, noteText: data });
    console.log({ e, editor, data });
  };

  return (
    <div className="notepage-container">
      <Sidebar />
      <section className="note-section">
        <div className="note-title-box">
          <input
            type="text"
            className="note-title-input"
            value={noteData.noteTitle}
            onChange={(e) =>
              setNoteData({ ...noteData, noteTitle: e.target.value })
            }
          />
        </div>
        <div className="note-editor">
          <CKEditor
            editor={ClassicEditor}
            data={noteData.noteText}
            onChange={(e, editor) => handleText(e, editor)}
          />
        </div>
        <div className="note-operations">
          <i className="tooltip fas fa-tag">
            <span className="tooltiptext">Label</span>
          </i>
          <i className="tooltip fas fa-palette">
            <span className="tooltiptext">Color</span>
          </i>
          <i className="tooltip fas fa-archive">
            <span className="tooltiptext">Archive</span>
          </i>
          <i className="tooltip fas fa-save" onClick={() => saveNote(noteData)}>
            <span className="tooltiptext">Save Note</span>
          </i>
        </div>
      </section>
      <div className="show-notes-container">
        {notes.map((note) => (
          <div key={note._id} className="note-container">
            <h3 className="note-title">{note.noteTitle}</h3>
            <div className="note-content">{parse(note.noteText)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotePage;
