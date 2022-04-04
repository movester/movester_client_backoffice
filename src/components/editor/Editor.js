import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import './styles.css';

export const Editor = () => {
  const [state, setState] = useState('null');
  const handleChange = value => {
    setState({ value });
  };
  return (
    <div className="text-editor">
      <EditorToolbar />
      <QuillWrapper>
        <ReactQuill
          theme="snow"
          value={state.value}
          onChange={handleChange}
          placeholder="Write something awesome..."
          modules={modules}
          formats={formats}
        />
      </QuillWrapper>
    </div>
  );
};

export default Editor;

const QuillWrapper = styled.div`
  img {
    width: 30%;
    margin-right: 3%;
    line-height: 75px;
  }
`;
