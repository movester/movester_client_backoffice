/* eslint-disable */
import React, { useState, useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import S3 from 'react-aws-s3';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import './styles.css';
window.Buffer = window.Buffer || require('buffer').Buffer;

export const Editor = () => {
  const QuillRef = useRef();
  const [state, setState] = useState('null');
  const handleChange = value => {
    setState({ value });
  };

  const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
      <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
      <path className="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9" />
    </svg>
  );

  const CustomRedo = () => (
    <svg viewBox="0 0 18 18">
      <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
      <path className="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5" />
    </svg>
  );

  function undoChange() {
    this.quill.history.undo();
  }
  function redoChange() {
    this.quill.history.redo();
  }

  const ImageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = function () {
      const file = input.files[0];
      const fileName = file.name;
      const config = {
        bucketName: process.env.REACT_APP_S3_BUCKET_NAME,
        region: process.env.REACT_APP_S3_REGION,
        accessKeyId: process.env.REACT_APP_S3_ACCESS_ID,
        secretAccessKey: process.env.REACT_APP_S3_ACCESS_KEY,
      };
      console.log(config);
      const ReactS3Client = new S3(config);

      ReactS3Client.uploadFile(file, fileName)
        .then(data => {
          if (data.status === 204) {
            const range = QuillRef.current?.getEditor().getSelection()?.index;

            if (range !== null && range !== undefined) {
              let quill = QuillRef.current?.getEditor();
              quill?.insertEmbed(range, 'image', `${data.location}`);
              quill?.setSelection(range, 1);
            }
          } else {
            alert('error');
          }
        })
        .catch(e => console.log('err', e));
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: '#toolbar',
        handlers: {
          undo: undoChange,
          redo: redoChange,
          image: ImageHandler,
        },
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
    }),
    [],
  );

  const formats = [
    'header',
    'size',
    'bold',
    'italic',
    'underline',
    'align',
    'strike',
    'script',
    'blockquote',
    'background',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
  ];

  const QuillToolbar = () => (
    <div id="toolbar">
      <span className="ql-formats">
        <select className="ql-header" defaultValue="3">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="3">Normal</option>
          <option value="4">Small</option>
          <option value="5">Comment</option>
        </select>
      </span>
      <span className="ql-formats">
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
        <button className="ql-blockquote" />
      </span>
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </span>
      <span className="ql-formats">
        <button className="ql-undo">
          <CustomUndo />
        </button>
        <button className="ql-redo">
          <CustomRedo />
        </button>
      </span>
    </div>
  );

  return (
    <div className="text-editor">
      <QuillToolbar />
      <QuillWrapper>
        <ReactQuill
          ref={element => {
            if (element !== null) {
              QuillRef.current = element;
            }
          }}
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
