import "./notePage.css";
import { Sidebar } from "../../components";
import parse from "html-react-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

export const NotePage = () => {
  const [text, setText] = useState("");
  const handleText = (e, editor) => {
    const data = editor.getData();
    setText(() => data);
    console.log({ e, editor, data });
  };

  return (
    <div className="notepage-container">
      <Sidebar />
      <section className="note-section">
        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(e, editor) => handleText(e, editor)}
          />
        </div>
        {parse(text)}
      </section>
    </div>
  );
};

export default NotePage;
