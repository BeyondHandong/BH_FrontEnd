import React from "react";
import {convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DraftToHtml from "draftjs-to-html";

import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";

const Editor = () => {
  const [editorState, setEditorState] = React.useState(
    MUIEditorState.createEmpty()
  );
  const onChange = (newState) => {
    setEditorState(newState);
  };
  return <div><MUIEditor 
            editorState={editorState} 
            onChange={onChange}
            /> {DraftToHtml(convertToRaw(editorState.getCurrentContent()))}
        </div>;
};

export default Editor;

